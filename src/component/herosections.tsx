import { Col, Row } from "antd";
function Herosections() {
  return (
    <>
      <Row>
        <img
          src="https://www.guaranteed-site-one-on-google.co.za/wp-content/uploads/revslider/portfolio_slider/1200x800.gif"
          alt=""
          className="object-cover w-full h-96"
        />
      </Row>
      <div className="mt-4 bg-purple-500 rounded-xl">
        <div className="p-6 text-white">
          <p className="text-2xl font-bold"> สินค้ามาใหม่</p>
          <p> เลือกช็อปสินค้าใหม่ล่าสุดก่อนใครได้เลย</p>
        </div>
      </div>

      {/* Product */}
      <div className="p-4 mt-2 bg-slate-300">
        <Row gutter={16}>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>QK65</p>
            <p>B4,000.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>NEO65</p>
            <p>B3,600.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>NEO75</p>
            <p>B3,600.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>Keychron K6</p>
            <p>B3,000.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>Keychron K6</p>
            <p>B3,000.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
        </Row>
      </div>

      <div className="flex items-center justify-center">
        <p> ดูเพิ่มเติม </p>
      </div>

      <div className="mt-4 bg-red-400">
        <div className="flex flex-col items-center justify-center pt-4 mt-4 text-white">
          <p className="text-2xl font-bold"> บริการส่งด่วน 3 ชั่วโมง</p>
          <p className="text-sm">
            {" "}
            สำหรับลูกค้าในกรุงเทพและปริมณฑลผ่านช่องทาง LINE @shop
          </p>
          <button className="w-20 h-10 m-4 bg-black rounded-md">
            สั่งเลย!
          </button>
        </div>
      </div>

      {/* สินค้า */}
      <div className="p-6 mt-4 text-white bg-purple-500 rounded-md">
        <p className="text-2xl font-bold">สินค้า</p>
        <p>สินค้า</p>
      </div>

      {/* product2 */}
      <div className="p-4 mt-2 bg-slate-300">
        <Row gutter={16}>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>QK65</p>
            <p>B4,000.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>NEO65</p>
            <p>B3,600.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>NEO75</p>
            <p>B3,600.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>Keychron K6</p>
            <p>B3,000.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
          <Col className="" span={4.8}>
            <img className="w-72" src="https://placehold.co/200x200" alt="" />
            <p>Keychron K6</p>
            <p>B3,000.00</p>
            <button className="text-white bg-black rounded-md h-9 w-72">
              เพิ่มลงตะกร้า
            </button>
          </Col>
        </Row>
      </div>

      <div className="flex items-center justify-center">
        <p> ดูเพิ่มเติม </p>
      </div>

      {/* บทความ */}
      <div className="p-6 mt-4 text-white bg-purple-500 rounded-md">
        <p className="text-2xl font-bold">บทความแนะนำ</p>
        <p>บทความดีๆที่เราอยากแนะนำให้คุณ</p>
      </div>

      {/* product3 */}
      <Row className="mt-4">
        <Col span={12}>
          <img
            src="https://www.guaranteed-site-one-on-google.co.za/wp-content/uploads/revslider/portfolio_slider/1200x800.gif"
            className="object-cover w-full h-96"
          />
        </Col>
        <Col span={12}>
          <img
            src="https://www.guaranteed-site-one-on-google.co.za/wp-content/uploads/revslider/portfolio_slider/1200x800.gif"
            className="object-cover w-full pl-2 h-96"
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col span={8}>
          <img
            src="https://www.guaranteed-site-one-on-google.co.za/wp-content/uploads/revslider/portfolio_slider/1200x800.gif"
            className="object-cover w-full h-96"
          />
        </Col>
        <Col span={8}>
          <img
            src="https://www.guaranteed-site-one-on-google.co.za/wp-content/uploads/revslider/portfolio_slider/1200x800.gif"
            className="object-cover w-full px-2 h-96"
          />
        </Col>
        <Col span={8}>
          <img
            src="https://www.guaranteed-site-one-on-google.co.za/wp-content/uploads/revslider/portfolio_slider/1200x800.gif"
            className="object-cover w-full h-96"
          />
        </Col>
      </Row>
      <div className="flex items-center justify-center">
        <p> ดูเพิ่มเติม </p>
      </div>
    </>
  );
}

export default Herosections;
