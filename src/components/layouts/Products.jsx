const Product = () => {
  return(
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators px-5">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner pt-3 px-5">
        <div className="carousel-item active">
          <img src="petgrooming.jpg" className="d-block w-100" alt="..." width={400} height={500} />
        </div>
        <div className="carousel-item">
          <img src="productPetSpa2.png" className="d-block w-100" alt="..." width={400} height={500} />
        </div>
        <div className="carousel-item">
          <img src="productPetSpa3.png" className="d-block w-100" alt="..." width={400} height={500} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        );
    }
export default Product;