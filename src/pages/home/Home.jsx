import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>HOME</div>
      <Link to="/test">Test</Link>
    </div>
  );
}
