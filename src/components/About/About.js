/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";

function About() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Utkarsh Singh</h4>
          <p className="card-text">
            The best thing about a boolean is even if you are wrong, you are
            only off by a bit.
          </p>
          <a
            href="https://www.linkedin.com/in/utkarsh-singh-hbase/"
            target="_blank"
            className="btn btn-primary"
          >
            See Profile
          </a>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">HBase.Org</h4>
          <p className="card-text">
            A misplaced ( . ) or ( ; ) will always end up where it will do the
            greatest damage.
          </p>
          <a
            href="https://github.com/HBaseDevelopers"
            target="_blank"
            className="btn btn-primary"
          >
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
