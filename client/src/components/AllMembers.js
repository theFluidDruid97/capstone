import React from "react";
import { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App.js";
import NavBar from "./NavBar.js";
import jsPDF from "jspdf";
import "./AllMembers.css";
import classnames from "classnames";

const AllMembers = () => {
  const { search, setSearch, members, setMembers, memberParams, currentUser } =
    useContext(Context);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [siblingCount, setSiblingCount] = useState(1);
  const [member_training, setMember_training] = useState();
  const [overallStatus, setOverallStatus] = useState([]);
  const navigate = useNavigate();
  const DOTS = "...";
  useEffect(() => {
    setOverallStatus([]);
    let updatedOverallStatus = [...overallStatus];
    members?.map((member) => {
      let collection = [];
      let memberID = member.id;
      let memberOverallStatus;
      let memberStatusText;
      fetch(`http://localhost:8080/member_training/${member.id}`)
        .then((response) => response.json())
        .then((data) => {
          data?.map((item) => {
            if (item.status == "Over Due") {
              collection.push("Over Due");
            } else if (item.status == "Due") {
              collection.push("Due");
            } else if (item.status == "Current") {
              collection.push("Current");
            }
          });
          return collection;
        })
        .then((collection) => {
          if (
            collection.find((element) => element == "Over Due") !== undefined
          ) {
            memberOverallStatus = "🔴";
            memberStatusText = "Over Due";
          } else if (
            collection.find((element) => element == "Due") !== undefined
          ) {
            memberOverallStatus = "🟡";
            memberStatusText = "Due";
          } else {
            memberOverallStatus = "🟢";
            memberStatusText = "Current";
          }
          updatedOverallStatus[memberID] = {
            memberID: memberID,
            status: memberOverallStatus,
            text: memberStatusText,
          };
          setOverallStatus(updatedOverallStatus);
        });
    });
  }, [members]);
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
    const data = filteredMembers.map((item) => [
      overallStatus[item.id]?.text,
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
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };
  let filteredMembers = members;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    filteredMembers = members?.filter((member) => {
      if (memberParams[0].rank === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (member.rank.toLowerCase().includes(search.toLowerCase())) {
          return member;
        }
      }
      if (memberParams[0].last_name === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (
          member.last_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return member;
        }
      }
      if (memberParams[0].first_name === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (
          member.first_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return member;
        }
      }
      if (memberParams[0].dod_id === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (member.dod_id.toLowerCase().includes(search.toLowerCase())) {
          return member;
        }
      }
      if (memberParams[0].email === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (member.email.toLowerCase().includes(search.toLowerCase())) {
          return member;
        }
      }
      if (memberParams[0].unit === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (member.unit.toLowerCase().includes(search.toLowerCase())) {
          return member;
        }
      }
      if (memberParams[0].office_symbol === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (
          member.office_symbol.toLowerCase().includes(search.toLowerCase())
        ) {
          return member;
        }
      }
      if (memberParams[0].afsc === true) {
        if (search === "") {
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (member.afsc.toLowerCase().includes(search.toLowerCase())) {
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
          return members?.slice(firstPageIndex, lastPageIndex);
        } else if (
          member.rank.toLowerCase().includes(search.toLowerCase()) ||
          member.last_name.toLowerCase().includes(search.toLowerCase()) ||
          member.first_name.toLowerCase().includes(search.toLowerCase()) ||
          member.dod_id.toLowerCase().includes(search.toLowerCase()) ||
          member.email.toLowerCase().includes(search.toLowerCase()) ||
          member.unit.toLowerCase().includes(search.toLowerCase()) ||
          member.office_symbol.toLowerCase().includes(search.toLowerCase()) ||
          member.afsc.toLowerCase().includes(search.toLowerCase())
        ) {
          return member;
        }
      }
    });
    return filteredMembers?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, members, search, overallStatus, memberParams]);
  const usePagination = (pageSize, siblingCount, currentPage) => {
    const totalPageCount = Math.ceil(filteredMembers?.length / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
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
  };
  const Pagination = (props) => {
    const { onPageChange, siblingCount, currentPage, pageSize, className } =
      props;
    const paginationRange = usePagination(
      pageSize,
      siblingCount || 1,
      currentPage
    ) || [1, 2, 3, 4, 5];
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
  const handlepageSize = (e) => {
    setPageSize(parseInt(e.target.value));
  };
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("fix-status").click();
    }, 500);
  }, []);

  return (
    <div className="Body">
      <NavBar />
      <div className="AllMembers">
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Members/Page
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <button
              className="btn btn-secondary ml-1"
              value={10}
              onClick={(e) => handlepageSize(e)}
            >
              10
            </button>
            <button
              className="btn btn-secondary ml-1"
              value={25}
              onClick={(e) => handlepageSize(e)}
            >
              25
            </button>
            <button
              className="btn btn-secondary ml-1"
              value={50}
              onClick={(e) => handlepageSize(e)}
            >
              50
            </button>
            <button
              className="btn btn-secondary ml-1"
              value={100}
              onClick={(e) => handlepageSize(e)}
            >
              100
            </button>
            <button
              className="btn btn-secondary ml-1 mr-1"
              value={250}
              onClick={(e) => handlepageSize(e)}
            >
              250
            </button>
          </ul>
          <span className="FormHeaderAM">All Members</span>
          <button
            className="btn btn-secondary"
            onClick={() => {
              generatePDF();
            }}
            type="button"
          >
            Export PDF
          </button>
        </div>
        <div className="PDF3">
          <table className="table p-3 table-dark table-striped table-hover sortable">
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
              {currentTableData?.map((item) => {
                return (
                  <tr
                    className="member-row"
                    onClick={() => {
                      navigate(`/all_members/${item.id}`);
                      setSearch("");
                    }}
                    key={item.id}
                  >
                    <td>{overallStatus[item.id]?.status}</td>
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
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default AllMembers;
