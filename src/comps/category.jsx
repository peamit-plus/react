import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsDB } from '../data/json';

function Category() {
  const { catId } = useParams(); // שימוש ב-catId מהפרמטר
  const [filteredProducts, setFilteredProducts] = useState([]); // שמירת המוצרים המסוננים

  // חישוב הקטגוריה הבאה והקודמת עם הגבלה בין 1 ל-12
  const nextCategory = Math.min(parseInt(catId) + 1, 12); // אם מעל 12, נשאר 12
  const prevCategory = Math.max(parseInt(catId) - 1, 1); // אם מתחת ל-1, נשאר 1

  // שימוש ב-useEffect כדי לעדכן את המוצרים המסוננים בכל פעם ש-catId משתנה
  useEffect(() => {
    // סינון המוצרים לפי הקטגוריה המתאימה
    const filtered = productsDB.products.filter(
      (item) => parseInt(item.category) === parseInt(catId)
    );
    setFilteredProducts(filtered); // עדכון ה-state עם המוצרים המסוננים
  }, [catId]); // הפעלת useEffect בכל שינוי של catId

  return (
    <div>
      <div className="container BorderContainer mt-5" style={{ marginTop: '25px' }}>
        <div className="header">
          <div className="row">
            <div className="col-xs-12 col-md-2">
              {/* כפתור "הבא" עם הקטגוריה הבאה המוגבלת ל-12, כפתור יושבת אם בקטגוריה 12 */}
              <Link to={`/category/${nextCategory}`}>
                <button className="btn btn-primary btn-block" disabled={parseInt(catId) === 12}>
                  הבא
                </button>
              </Link>
            </div>
            <div className="col-xs-12 col-md-2">
              <Link to={'/*'}>
                <button className="btn btn-primary btn-block">חיפוש מוצר</button>
              </Link>
            </div>
            <div className="col-xs-12 col-md-4">
              <button className="btn btn-info btn-block" id="sidebarCollapse">
                סיים הזמנה
              </button>
            </div>
            <div className="col-xs-12 col-md-2">
              <Link to={'/'}>
                <button className="btn btn-primary btn-block">דף הבית</button>
              </Link>
            </div>
            <div className="col-xs-12 col-md-2">
              {/* כפתור "הקודם" עם הקטגוריה הקודמת המוגבלת ל-1, כפתור יושבת אם בקטגוריה 1 */}
              <Link to={`/category/${prevCategory}`}>
                <button className="btn btn-primary btn-block" disabled={parseInt(catId) === 1}>
                  הקודם
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {filteredProducts.map((item) => (
        <div className="col-md-3 product-container" key={item.id}>
          <div className="thumbnail">
            <figure>
              <img
                src={require(`../data/image/${item.image || 2043}.WebP`)}
                alt={item.descraption}
                style={{ height: '250px', width: '100%' }}
              />
              <figcaption>
                <div className="caption product-caption">
                  <p className="text-center">
                    <b>
                      ₪{item.descraption} {item.price}
                    </b>
                    <br />
                    <button className="btn btn-info" id="addToCartBtn">
                      <span className="glyphicon glyphicon-shopping-cart"></span> הוסף לסל
                    </button>
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
