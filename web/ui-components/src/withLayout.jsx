import React from "react";

export const withLayout = Page => {
  return () => (
    <>
      <h1>Hello</h1>
      <Page />
    </>
  )
};