import React from 'react';
import data from './data.json';
import Products from './Products';

class Aside extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sizes: '',
      select: 'selected',
    };
  }
  handlClick = (size) => {
    this.setState({
      size: size,
    });
  };
  render() {
    let products = data.products;
    let sizes = products.reduce((acc, cv) => {
      acc = acc.concat(cv.availableSizes);
      return acc;
    }, []);
    let unique = [...new Set(sizes)];
    let item = [...products].filter((product) =>
      product.availableSizes.includes(this.state.size)
    );
    return (
      <>
        <div className="flex">
          <aside className="flex-30">
            <div className="grid">
              {unique.map((size, i) => (
                <p
                  key={i}
                  className={
                    this.state.sizes === size ? 'circle active' : 'circle'
                  }
                  onClick={() => this.handleClick(size)}
                >
                  size
                </p>
              ))}
            </div>
          </aside>
          <products item={item} />
        </div>
      </>
    );
  }
}
export default Aside;
