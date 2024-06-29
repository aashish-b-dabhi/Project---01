import { Link } from "react-router-dom"

const Home = () => {

    let products = [

        {

            id: 1,
            img: "https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg",
            title: "Redmi 13C",
            price: "₹7,699 ",
            desc: "Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera"

        },
        {

            id: 2,
            img: "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme narzo 60X",
            price: "₹14,499 ",
            desc: "realme narzo 60X 5G (Stellar Green,6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera"

        },
        {

            id: 3,
            img: "https://m.media-amazon.com/images/I/41QssaE9gfL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme narzo N53",
            price: "₹8,999",
            desc: "realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slim Smartphone | 90 Hz Smooth Display"

        },
        {

            id: 4,
            img: "https://m.media-amazon.com/images/I/61Id6WJDWqL._SX679_.jpg",
            title: "iQOO Z7 Pro",
            price: "₹24,999",
            desc: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor"

        },
        {

            id: 5,
            img: "https://m.media-amazon.com/images/I/71-ZHpmFzDL._SX679_.jpg",
            title: "realme NARZO 70",
            price: "₹21,999",
            desc: "realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,256GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera"

        },
        {

            id: 6,
            img: "https://m.media-amazon.com/images/I/71S-JT2h33L._SY741_.jpg",
            title: "realme GT 2",
            price: "₹27,150",
            desc: "realme GT 2 (Paper White 8GB RAM+128GB Storage) Qualcomm Snapdragon 888 Processor"

        },
        {

            id: 7,
            img: "https://m.media-amazon.com/images/I/51QLvfmJaIL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme 11 Pro+",
            price: " ₹31,999",
            desc: "realme 11 Pro+ 5G (Sunrise Beige, 12GB RAM, 256GB Storage) | 120 Hz Curved Display | 200MP ProLight Camera "

        },
        {

            id: 8,
            img: "https://m.media-amazon.com/images/I/51JaSbauK3L._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Samsung Galaxy M34 ",
            price: " ₹14,999",
            desc: "Samsung Galaxy M34 5G (Waterfall Blue,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update "

        },
    ]

    return (

        <div className="container my-5">
            <div className="row">
                {products.map((val, index) => {

                    return (
                        <>
                            <div className="col-md-3 my-3">
                                <div class="card">
                                    <img style={{ width: "200px", padding: "20px" }} src={val.img} class="mx-auto" alt="Image" />
                                    <div class="card-body">
                                        <h5 class="card-title d-flex justify-content-between">{val.title}<span>{val.price}</span></h5>
                                        <p class="card-text">{val.desc}</p>
                                        <Link to={`/${val.id}`} href="#" class="btn btn-primary" style={{ width: "100%" }}>View Product</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )

}
export default Home