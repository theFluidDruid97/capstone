import React from "react";
import { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App.js";
import NavBar from "./NavBar.js";
import jsPDF from "jspdf";
import "./AllMembers.css";
import classnames from "classnames";

const AllMembers = () => {
  // const colors [{id:1, color:"🔴"},{id:2, color:"🟡"},{id:3, color:"🟢"}]
  const { search, members, setMembers, memberParams, currentUser } =
    useContext(Context);
  const [PageSize, setPageSize] = useState(5);

  useEffect(() => {}, [PageSize]);

  let totalCount = members?.length;
  const navigate = useNavigate();
  const generatePDF = () => {
    const unit = "pt";
    const size = "A4";
    const orientation = "landscape";
    const marginLeft = 40;
    const title = "General Training Report";
    const headers = [
      [
        "Status",
        "Rank",
        "First Name",
        "Last Name",
        "DoD ID",
        "E-Mail Address",
        "Unit",
        "Office Symbol",
        "AFSC",
      ],
    ];
    const data = members?.map((item) => [
      "PLACEHOLDER",
      item.rank,
      item.last_name,
      item.first_name,
      item.dod_id,
      item.email,
      item.unit,
      item.office_symbol,
      item.afsc,
    ]);
    const content = {
      startY: 50,
      head: headers,
      body: data,
    };
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    const string = doc.output("datauristring");
    const embed = "<embed width='100%' height='100%' src='" + string + "'/>";
    const x = window.open();
    x.document.open();
    x.document.write(embed);
    x.document.close();
  };
  const handlePageSize = (e) => {
    setPageSize(e.target.value);
    console.log("PAGE SIZE ==>", PageSize);
  };
  console.log("MEMBERS ==>", members);
  const DOTS = "...";
  console.log("TOTAL COUNT ==>", totalCount);
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return members?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const Pagination = (props) => {
    const {
      onPageChange,
      totalCount,
      siblingCount = 1,
      currentPage,
      PageSize,
      className,
    } = props;
    const paginationRange = usePagination({
      currentPage,
      totalCount,
      siblingCount,
      PageSize,
    });
    console.log(paginationRange);

    if (currentPage === 0 || paginationRange?.length < 2) {
      return null;
    }

    const onNext = () => {
      onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
      onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange?.length - 1];
    return (
      <div
        className={classnames("pagination-container mb-3", {
          [className]: className,
        })}
      >
        <button
          className={classnames("pagination-item btn btn-secondary", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
          &laquo; Previous
        </button>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <button className="pagination-item dots btn btn-secondary">
                &#8230;
              </button>
            );
          }

          return (
            <button
              className={classnames("pagination-item btn btn-secondary", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className={classnames("pagination-item btn btn-secondary", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
          Next &raquo;
        </button>
      </div>
    );
  };

  const usePagination = ({
    totalCount,
    PageSize,
    siblingCount = 1,
    currentPage,
  }) => {
    const paginationRange = useMemo(() => {
      const totalPageCount = Math.ceil(totalCount / PageSize);
      console.log("TOTAL COUNT/PAGE SIZE ==>", totalCount, "/", PageSize);
      console.log("TOTAL PAGE COUNT ==>", totalPageCount);

      // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
      const totalPageNumbers = siblingCount + 5;

      /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );

      /*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);

        return [...leftRange, DOTS, totalPageCount];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
      }
    }, [totalCount, PageSize, siblingCount, currentPage]);
    return paginationRange;
  };

  return (
    <div className="Body">
      <NavBar />
      <div className="AllMembers">
        <div className="FormHeaderAM">
          <button
            className="btn btn-secondary"
            onClick={() => {
              generatePDF();
            }}
            type="button"
          >
            Export PDF
          </button>
          <button
            className="btn btn-secondary dropdown-toggle ml-3"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Members Per-Page
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <button value={5} onClick={(e) => handlePageSize(e)}>
              5
            </button>
            <button value={10} onClick={(e) => handlePageSize(e)}>
              10
            </button>
            <li>
              <a className="dropdown-item" href="#">
                50
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                100
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                250
              </a>
            </li>
          </ul>
          All Members
        </div>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th data-sort="status">Status</th>
              <th data-sort="rank">Rank</th>
              <th data-sort="last_name">Last Name</th>
              <th data-sort="first_name">First Name</th>
              <th data-sort="dod_id">DoD ID</th>
              <th data-sort="email">E-Mail Address</th>
              <th data-sort="unit">Unit</th>
              <th data-sort="office_symbol">Office Symbol</th>
              <th data-sort="afsc">AFSC</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData
              ?.filter((member) => {
                if (memberParams[0].rank === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.rank.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].last_name === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.last_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].first_name === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].dod_id === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.dod_id.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].email === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.email.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].unit === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.unit.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].office_symbol === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.office_symbol
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (memberParams[0].afsc === true) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.afsc.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
                if (
                  (memberParams[0].rank === true &&
                    memberParams[0].last_name === true &&
                    memberParams[0].first_name === true &&
                    memberParams[0].dod_id === true &&
                    memberParams[0].email === true &&
                    memberParams[0].unit === true &&
                    memberParams[0].office_symbol === true &&
                    memberParams[0].afsc === true) ||
                  (memberParams[0].rank === false &&
                    memberParams[0].last_name === false &&
                    memberParams[0].first_name === false &&
                    memberParams[0].dod_id === false &&
                    memberParams[0].email === false &&
                    memberParams[0].unit === false &&
                    memberParams[0].office_symbol === false &&
                    memberParams[0].afsc === false)
                ) {
                  if (search === "") {
                    return member;
                  } else if (
                    member.rank.toLowerCase().includes(search.toLowerCase()) ||
                    member.last_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.dod_id
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.email.toLowerCase().includes(search.toLowerCase()) ||
                    member.unit.toLowerCase().includes(search.toLowerCase()) ||
                    member.office_symbol
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    member.afsc.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return member;
                  }
                }
              })
              .map((item) => {
                return (
                  <tr
                    className="member-row"
                    onClick={() => {
                      navigate(`/all_members/${item.id}`);
                    }}
                    key={item.id}
                  >
                    <td className="text-danger">🔴</td>
                    <td>{item.rank}</td>
                    <td>{item.last_name}</td>
                    <td>{item.first_name}</td>
                    <td>{item.dod_id}</td>
                    <td>{item.email}</td>
                    <td>{item.unit}</td>
                    <td>{item.office_symbol}</td>
                    <td>{item.afsc}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalCount}
          PageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default AllMembers;
