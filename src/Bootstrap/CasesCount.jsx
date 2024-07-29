import React from "react";

function CasesCount() {
  return (
    <>
      <div className="container-fluid bg-dark p-3">
        <div className="row gap-5 mx-auto d-flex justify-content-center">
          <div className="col-md-3 text-center border border-warning-subtle text-white d-flex flex-column align-items-center justify-content-center rounded p-3">
            <div className="text-light">SC pending Cases</div>
            <div className="fw-5 fs-1">2.8M</div>
          </div>
          <div className="col-md-3 text-center border border-warning-subtle text-white d-flex flex-column align-items-center justify-content-center rounded p-3">
            <div className="text-light">SC Disposed Cases</div>
            <div className="fw-5 fs-1">2.8M</div>
          </div>
          <div className="col-md-3 text-center border border-warning-subtle text-white d-flex flex-column align-items-center justify-content-center rounded p-3">
            <div className="text-light">SC New Cases Today</div>
            <div className="fw-5 fs-1">2.8M</div>
          </div>
          <div className="col-md-3 text-center border border-warning-subtle text-white d-flex flex-column align-items-center justify-content-center rounded p-3">
            <div className="text-light">HC pending Cases</div>
            <div className="fw-5 fs-1">2.8M</div>
          </div>
          <div className="col-md-3 text-center border border-warning-subtle text-white d-flex flex-column align-items-center justify-content-center rounded p-3">
            <div className="text-light">HC Disposed Cases</div>
            <div className="fw-5 fs-1">2.8M</div>
          </div>
          <div className="col-md-3 text-center border border-warning-subtle text-white d-flex flex-column align-items-center justify-content-center rounded p-3">
            <div className="text-light">HC New Cases Today</div>
            <div className="fw-5 fs-1">2.8M</div>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default CasesCount;
