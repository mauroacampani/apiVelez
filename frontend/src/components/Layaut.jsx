const Layaut = (props) => {
  return (
    <>
      <section className="container mx-auto flex px-5 py-24 flex-col items-center">
        {props.children}
      </section>
    </>
  );
};

export default Layaut;
