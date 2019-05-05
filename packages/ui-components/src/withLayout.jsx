const withLayout = Page => {
  return () => (
    <>
      <h1>Hello</h1>
      <Page />
    </>
  )
};

export default withLayout;