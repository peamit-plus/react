import React from 'react'
import { productsDB } from '../data/json'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div class="container-fluid text-center ">
                <div class="page-header">
                    <h1>פעמית פלוס ירושלים</h1>
                    <h3>ברוכים הבאים לקטלוג המוצרים שלנו</h3>

                </div>
                <h4 id="demotext">בחר בקטגוריה המבוקשת</h4>
</div>
                {
                    productsDB.category.map((item) => {
                        return (
                            <div className='col-md-3 shaow' key={item.image}>
                                <div className='thumbnail'>
                                    <img src={require(`../data/imgctg/${item.image}.WebP`)} alt={item.p} style={{ width: "100%", height: "270px" }} className='carsor' />
                                    <div className='caption'>
                                        <p className='text-primary'>{item.p}<br />

                                            <Link className='btn btn-primary' to={`/category/${item.image}`}>&laquo; לקטגוריה לחץ</Link>
                                        </p>
                                    </div>
                                </div>
                            
                            </div>

                        )
                    })
                }

            </div >
            )
}
