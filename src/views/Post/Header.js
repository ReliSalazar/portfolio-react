function Header({ src }) {
  const styles = {
    backgroundColor: "#e15d74",
    backgroundImage: `url(${src})`,
  };

  if (src) {
    return (
      <div
        className="img-container h-40 sm:h-60 2xl:h-80 w-full bg-no-repeat bg-cover bg-center mb-5"
        style={styles}
      />
    );
  }
  return null;
}

export default Header;
