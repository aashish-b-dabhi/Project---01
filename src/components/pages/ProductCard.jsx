import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ProductCard = () => {

    let { id } = useParams()
    console.log(id, "pro");

    let products = [
        {
            id: 1,
            img: "https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg",
            title: "Redmi 13C",
            desc: "Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
            price: "₹7,699 ",
            about: "Processor: High performance MediaTek G85 ; Enhance gaming with 1GHz GPU | 12GB of RAM including 6GB virtual | 6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Triple camera |Fast Side fingerprint | 5000mAh Battery",
            brand: "Xiaomi",
            model: "Redmi 13C",
            network: "Unlocked for All Carriers",
            System: "MIUI 14, Android 13.0",
            technology: "4G"
        },
        {
            id: 2,
            img: "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme narzo 60X",
            desc: "realme narzo 60X 5G (Stellar Green,6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge",
            price: "₹14,499",
            about: "With a 33 W Powerful SUPERVOOC Charge, 30 minutes charge for 50% battery and full charge in 70 minutes,5000mAh massive battery, without ever being concerned about the battery running out",
            brand: "realme",
            model: "realme narzo 60x",
            network: "Unlocked for All Carriers",
            System: "Android 13.0",
            technology: "5G"
        },
        {
            id: 3,
            img: "https://m.media-amazon.com/images/I/71DSxfKzkJL._SX679_.jpg",
            title: "realme narzo N53",
            desc: "realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slim Smartphone | 90 Hz Smooth Display",
            price: " ₹8,999",
            about: "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 64GB ROM",
            brand: "realme",
            model: "realme narzo N53",
            network: "Unlocked for All Carriers",
            System: "Android 13.0",
            technology: "4G"
        },
        {
            id: 4,
            img: "https://m.media-amazon.com/images/I/61Id6WJDWqL._SX679_.jpg",
            title: "iQOO Z7 Pro",
            desc: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone",
            price: " ₹24,999",
            about: "Dimensity 7200 5g processor based on the latest 4nm energy-efficient process 3D Curved Super-vision Display with 17.22 cm (6.78 inches) screen size, 93.3% Screen-to-body ratio, 120 Hz AMOLED FHD+, 1.07 Billion Colors, 1300 nits Peak Local Brightness",
            brand: "iQOO",
            model: "iQOO Z7 Pro 5G",
            network: "Unlocked for All Carriers",
            System: "Funtouch OS 13 Based On Android 13",
            technology: "5G"
        },
        {
            id: 5,
            img: "https://m.media-amazon.com/images/I/71-ZHpmFzDL._SX679_.jpg",
            title: "realme NARZO 70",
            desc: "realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,256GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera",
            price: " ₹21,999",
            about: "50MP Flagship Sony IMX890 Night vision camera with OIS, the largest sensor in the segment, 56% more light intake, 8MP Camera and 2MP lens, 16MP Front (Selfie) Camera Horizon Glass Design : The 1st Glass Design in the segment with the better handling",
            brand: "realme",
            model: "realme narzo 70 Pro 5G",
            network: "Unlocked for All Carriers",
            System: "Android 14",
            technology: "5G"
        },
        {
            id: 6,
            img: "https://m.media-amazon.com/images/I/71S-JT2h33L._SY741_.jpg",
            title: "realme GT 2 ",
            desc: "realme GT 2 (Paper White 8GB RAM+128GB Storage) Qualcomm Snapdragon 888 Processor | 50MP Camera",
            price: " ₹27,150",
            about: "8 GB RAM | 128 GB ROM Expandable Upto 256 GB 16.81 cm (6.62 inch) Full HD+ AMOLED Display 50MP + 8MP + 2MP | 16MP Front Camera 5000mAh Battery",
            brand: "realme",
            model: "realme GT 2",
            network: "Unlocked for All Carriers",
            System: "Android 12.0",
            technology: "5G"
        },
        {
            id: 7,
            img: "https://m.media-amazon.com/images/I/51QLvfmJaIL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme 11 Pro+ ",
            desc: "realme 11 Pro+ 5G (Sunrise Beige, 12GB RAM, 256GB Storage) | 120 Hz Curved Display | 200MP ProLight Camera | 7050 5G Dimensity | 100W SUPERVOOC | 12GB Dynamic RAM | Premier Vegan Leather Finish Design",
            price: " ₹31,999",
            about: "ColorOS V13.1.0 (Based on Android 13) Front Camera, Camera Microphone, Buttons, Touchscreen with Stylus Support, OCR",
            brand: "realme",
            model: "realme 11 Pro+ 5G (Sunrise Beige, 12GB RAM, 256GB Storage)",
            network: "Unlocked for All Carriers",
            System: "ColorOS V13.1.0 (Based on Android 13)",
            technology: "5G"
        },
        {
            id: 8,
            img: "https://m.media-amazon.com/images/I/51JaSbauK3L._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Samsung Galaxy M34",
            desc: "Samsung Galaxy M34 5G (Waterfall Blue,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
            price: "₹14,999",
            about: "16.42 Centimeters (6.5-Inch) Super AMOLED Display, FHD+ Resolution, 1080 x 2340 Pixels Protected by Corning Gorilla Glass 5",
            brand: "Samsung",
            model: "Samsung Galaxy M34 5G",
            network: "Unlocked for All Carriers",
            System: "Android 13.0",
            technology: "5G"
        },
        {
            id: 9,
            img: "https://m.media-amazon.com/images/I/41Y5EIg1UrL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Samsung Galaxy A15",
            desc: "Samsung Galaxy A15 5G (Blue Black, 8GB, 256GB Storage) | 50 MP Main Camera | Android 14 with One UI 6.0 | 16GB Expandable RAM | MediaTek Dimensity 6100+ | 5000 mAh Battery",
            price: " ₹22,499",
            about: "CAMERA - 50MP (F1.8) Main Wide Angle Camera + 5MP (F2.2) Ultra Wide Camera + 2MP (F2.4) Macro Camera | 13MP (F2.0) Front Camera | Video Maximum Resolution of Full HD (1920 x 1080) @30fps",
            brand: "Samsung",
            model: "Samsung Galaxy A15 5G",
            network: "Unlocked for All Carriers",
            System: "Android 14.0",
            technology: "5G"
        },
        {
            id: 10,
            img: "https://m.media-amazon.com/images/I/61u9zN1HYCL._SX679_.jpg",
            title: "OnePlus 11R 5G",
            desc: "OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)",
            price: "₹29,999",
            about: "Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support",
            brand: "OnePlus",
            model: "OnePlus 11R",
            network: "Unlocked for All Carriers",
            System: "OxygenOS",
            technology: "5G"
        },
        {
            id: 11,
            img: "https://m.media-amazon.com/images/I/819VAShnDpL._SX679_.jpg",
            title: "Nothing Phone (2) ",
            desc: "Nothing Phone (2) 5G (White, 12GB RAM, 256GB Storage) | 6.7 LTPO OLED AMOLED Display | 50 MP(OIS) + 50MP | 32MP Front Cam| Qualcomm Snapdragon 8+Gen 1 | 4700 mAh Battery 45W Charging| 100% in 55 Mins",
            price: "₹54,999",
            about: " 12 GB RAM | 256 GB ROM(Inbuilt Memory) | Not Expandable | Dual SIM (Nano-SIM, dual stand-by) | RAM Type : LPDDR5 | Storage Type : UFS 3.1 | OTG Support || SIM1: Nano, SIM2: Nano | Network : 5G Connectivity on Both SIM Slots | Dual VoLTE(4G) | Wi-Fi 6; BT 5.3; NFC | Type C OTG Supportable | Type C Fast Charging Tecnology Support | Type C Earphone Support.",
            brand: "Nothing",
            model: "Nothing Phone (2) 5G (White, 12GB RAM, 256GB Storage)",
            network: "Unlocked for All Carriers",
            System: "Nothing OS 2.0, which is based on Android 13 & Nothing Phone (2) have 3 years of Android updates and 4 years of security updates.",
            technology: "5G, 4G, 4G VOLTE, 3G, 2G, GSM, WCDMA"
        },
        {
            id: 12,
            img: "https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg",
            title: "iPhone 15 Pro",
            desc: "Apple iPhone 15 Pro (512 GB) - Natural Titanium",
            price: "₹1,58,990",
            about: " FORGED IN TITANIUM — iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
            brand: "Apple",
            model: "iPhone 15 Pro",
            network: "Unlocked for All Carriers",
            System: "iOS",
            technology: "5G"
        },
        {
            id: 13,
            img: "https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg",
            title: "Redmi 13C",
            desc: "Redmi 13C (Starfrost White, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
            price: "₹7,699 ",
            about: "Processor: High performance MediaTek G85 ; Enhance gaming with 1GHz GPU | 12GB of RAM including 6GB virtual | 6.74 HD+ 90Hz display with Corning Gorilla Glass 3 Protection | 50MP AI Triple camera |Fast Side fingerprint | 5000mAh Battery",
            brand: "Xiaomi",
            model: "Redmi 13C",
            network: "Unlocked for All Carriers",
            System: "MIUI 14, Android 13.0",
            technology: "4G"
        },
        {
            id: 14,
            img: "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme narzo 60X",
            desc: "realme narzo 60X 5G (Stellar Green,6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge",
            price: "₹14,499",
            about: "With a 33 W Powerful SUPERVOOC Charge, 30 minutes charge for 50% battery and full charge in 70 minutes,5000mAh massive battery, without ever being concerned about the battery running out",
            brand: "realme",
            model: "realme narzo 60x",
            network: "Unlocked for All Carriers",
            System: "Android 13.0",
            technology: "5G"
        },
        {
            id: 15,
            img: "https://m.media-amazon.com/images/I/71DSxfKzkJL._SX679_.jpg",
            title: "realme narzo N53",
            desc: "realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slim Smartphone | 90 Hz Smooth Display",
            price: " ₹8,999",
            about: "Enjoy smooth multitasking and effortless app switching with the powerful 8GB dynamic RAM. Store all your favorite apps, photos, and files with the generous 64GB ROM",
            brand: "realme",
            model: "realme narzo N53",
            network: "Unlocked for All Carriers",
            System: "Android 13.0",
            technology: "4G"
        },
        {
            id: 16,
            img: "https://m.media-amazon.com/images/I/61Id6WJDWqL._SX679_.jpg",
            title: "iQOO Z7 Pro",
            desc: "iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone",
            price: " ₹24,999",
            about: "Dimensity 7200 5g processor based on the latest 4nm energy-efficient process 3D Curved Super-vision Display with 17.22 cm (6.78 inches) screen size, 93.3% Screen-to-body ratio, 120 Hz AMOLED FHD+, 1.07 Billion Colors, 1300 nits Peak Local Brightness",
            brand: "iQOO",
            model: "iQOO Z7 Pro 5G",
            network: "Unlocked for All Carriers",
            System: "Funtouch OS 13 Based On Android 13",
            technology: "5G"
        },
        {
            id: 17,
            img: "https://m.media-amazon.com/images/I/71-ZHpmFzDL._SX679_.jpg",
            title: "realme NARZO 70",
            desc: "realme NARZO 70 Pro 5G (Glass Green, 8GB RAM,256GB Storage) Dimensity 7050 5G Chipset | Horizon Glass Design | Segment 1st Flagship Sony IMX890 OIS Camera",
            price: " ₹21,999",
            about: "50MP Flagship Sony IMX890 Night vision camera with OIS, the largest sensor in the segment, 56% more light intake, 8MP Camera and 2MP lens, 16MP Front (Selfie) Camera Horizon Glass Design : The 1st Glass Design in the segment with the better handling",
            brand: "realme",
            model: "realme narzo 70 Pro 5G",
            network: "Unlocked for All Carriers",
            System: "Android 14",
            technology: "5G"
        },
        {
            id: 18,
            img: "https://m.media-amazon.com/images/I/71S-JT2h33L._SY741_.jpg",
            title: "realme GT 2 ",
            desc: "realme GT 2 (Paper White 8GB RAM+128GB Storage) Qualcomm Snapdragon 888 Processor | 50MP Camera",
            price: " ₹27,150",
            about: "8 GB RAM | 128 GB ROM Expandable Upto 256 GB 16.81 cm (6.62 inch) Full HD+ AMOLED Display 50MP + 8MP + 2MP | 16MP Front Camera 5000mAh Battery",
            brand: "realme",
            model: "realme GT 2",
            network: "Unlocked for All Carriers",
            System: "Android 12.0",
            technology: "5G"
        },
        {
            id: 19,
            img: "https://m.media-amazon.com/images/I/51QLvfmJaIL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "realme 11 Pro+ ",
            desc: "realme 11 Pro+ 5G (Sunrise Beige, 12GB RAM, 256GB Storage) | 120 Hz Curved Display | 200MP ProLight Camera | 7050 5G Dimensity | 100W SUPERVOOC | 12GB Dynamic RAM | Premier Vegan Leather Finish Design",
            price: " ₹31,999",
            about: "ColorOS V13.1.0 (Based on Android 13) Front Camera, Camera Microphone, Buttons, Touchscreen with Stylus Support, OCR",
            brand: "realme",
            model: "realme 11 Pro+ 5G (Sunrise Beige, 12GB RAM, 256GB Storage)",
            network: "Unlocked for All Carriers",
            System: "ColorOS V13.1.0 (Based on Android 13)",
            technology: "5G"
        },
        {
            id: 20,
            img: "https://m.media-amazon.com/images/I/51JaSbauK3L._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Samsung Galaxy M34",
            desc: "Samsung Galaxy M34 5G (Waterfall Blue,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
            price: "₹14,999",
            about: "16.42 Centimeters (6.5-Inch) Super AMOLED Display, FHD+ Resolution, 1080 x 2340 Pixels Protected by Corning Gorilla Glass 5",
            brand: "Samsung",
            model: "Samsung Galaxy M34 5G",
            network: "Unlocked for All Carriers",
            System: "Android 13.0",
            technology: "5G"
        },
        {
            id: 21,
            img: "https://m.media-amazon.com/images/I/41Y5EIg1UrL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Samsung Galaxy A15",
            desc: "Samsung Galaxy A15 5G (Blue Black, 8GB, 256GB Storage) | 50 MP Main Camera | Android 14 with One UI 6.0 | 16GB Expandable RAM | MediaTek Dimensity 6100+ | 5000 mAh Battery",
            price: " ₹22,499",
            about: "CAMERA - 50MP (F1.8) Main Wide Angle Camera + 5MP (F2.2) Ultra Wide Camera + 2MP (F2.4) Macro Camera | 13MP (F2.0) Front Camera | Video Maximum Resolution of Full HD (1920 x 1080) @30fps",
            brand: "Samsung",
            model: "Samsung Galaxy A15 5G",
            network: "Unlocked for All Carriers",
            System: "Android 14.0",
            technology: "5G"
        },
        {
            id: 22,
            img: "https://m.media-amazon.com/images/I/61u9zN1HYCL._SX679_.jpg",
            title: "OnePlus 11R 5G",
            desc: "OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)",
            price: "₹29,999",
            about: "Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support",
            brand: "OnePlus",
            model: "OnePlus 11R",
            network: "Unlocked for All Carriers",
            System: "OxygenOS",
            technology: "5G"
        },
        {
            id: 23,
            img: "https://m.media-amazon.com/images/I/819VAShnDpL._SX679_.jpg",
            title: "Nothing Phone (2) ",
            desc: "Nothing Phone (2) 5G (White, 12GB RAM, 256GB Storage) | 6.7 LTPO OLED AMOLED Display | 50 MP(OIS) + 50MP | 32MP Front Cam| Qualcomm Snapdragon 8+Gen 1 | 4700 mAh Battery 45W Charging| 100% in 55 Mins",
            price: "₹54,999",
            about: " 12 GB RAM | 256 GB ROM(Inbuilt Memory) | Not Expandable | Dual SIM (Nano-SIM, dual stand-by) | RAM Type : LPDDR5 | Storage Type : UFS 3.1 | OTG Support || SIM1: Nano, SIM2: Nano | Network : 5G Connectivity on Both SIM Slots | Dual VoLTE(4G) | Wi-Fi 6; BT 5.3; NFC | Type C OTG Supportable | Type C Fast Charging Tecnology Support | Type C Earphone Support.",
            brand: "Nothing",
            model: "Nothing Phone (2) 5G (White, 12GB RAM, 256GB Storage)",
            network: "Unlocked for All Carriers",
            System: "Nothing OS 2.0, which is based on Android 13 & Nothing Phone (2) have 3 years of Android updates and 4 years of security updates.",
            technology: "5G, 4G, 4G VOLTE, 3G, 2G, GSM, WCDMA"
        },
        {
            id: 24,
            img: "https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg",
            title: "iPhone 15 Pro",
            desc: "Apple iPhone 15 Pro (512 GB) - Natural Titanium",
            price: "₹1,58,990",
            about: " FORGED IN TITANIUM — iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
            brand: "Apple",
            model: "iPhone 15 Pro",
            network: "Unlocked for All Carriers",
            System: "iOS",
            technology: "5G"
        },

    ]

    let result = products.filter((val) => val.id == id)
    console.log(result);

    return (

        <div class="card border-0 mb-3 my-5">
            <div class="row">
                <div class="col-3">
                    <img style={{ width: "400px" }} src={result[0].img} class="border-end" alt="..." />
                </div>
                <div class="col-md-8 ps-5">
                    <div class="card-body">
                        <h3 class="card-title">{result[0].title}</h3>
                        <p className="my-3">{result[0].desc}</p>
                        <h5>M.R.P : {result[0].price}</h5>
                        <hr />
                        <h6 className="fw-bold">About this item</h6>
                        <p>{result[0].about}</p>
                        <hr />
                        <table className="mb-4">
                            <tr>
                                <td className="fw-semibold">Brand</td>
                                <td className="ps-5">{result[0].brand}</td>
                            </tr>
                            <tr>
                                <td className="fw-semibold">Model Name</td>
                                <td className="ps-5">{result[0].model}</td>
                            </tr>
                            <tr>
                                <td className="fw-semibold">Network Service Provider</td>
                                <td className="ps-5">{result[0].network}</td>
                            </tr>
                            <tr>
                                <td className="fw-semibold">Operating System</td>
                                <td className="ps-5">{result[0].System}</td>
                            </tr>
                            <tr>
                                <td className="fw-semibold">Cellular Technology</td>
                                <td className="ps-5">{result[0].technology}</td>
                            </tr>
                        </table>

                        <Link className="btn btn-outline-primary me-3">Add to Cart</Link>
                        <Link className="btn btn-primary">Buy Now</Link>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProductCard