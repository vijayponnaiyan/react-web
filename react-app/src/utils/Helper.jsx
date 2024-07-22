export  const handelsearch = (e) => {
    e.preventDefault();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilteredProducts(filtered);
  };