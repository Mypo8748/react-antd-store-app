import { createFromIconfontCN } from "@ant-design/icons";
import { Col, Row } from "antd";
function Footer() {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  return (
    <>
      <div className="flex items-center justify-center p-4 bg-purple-500">
        <p>
          ลูกค้าใหม่รับส่วนลด 10% ทันที สำหรับการสั่งซื้อครั้งแรก
          รับส่วนลดได้ที่ LINE @shop
        </p>
        <button className="p-1 mx-2 text-white bg-green-400 rounded-md">
          {" "}
          เพิ่มเพื่อนเลย{" "}
        </button>
      </div>

      <div className="p-8 bg-black">
        <div className="container mx-auto text-white">
          <Row>
            <Col span={6} className="pr-2">
              <p className="text-xl"> Keeblur</p>
              <p className="text-xs">
                Keeblur คือเว็บไซต์ที่เกี่ยวกับคีย์บอร์ด
                ที่ทำให้คุณสามารถเลือกซื้อคีย์บอร์ดได้ตามใจต้องการ
                และเลือกซื้อสินค้าที่คุณต้องการได้ง่ายๆ
              </p>
            </Col>
            <Col span={6}>
              <p className="text-xl">เกี่ยวกับเรา</p>
              <p className="text-xs">ติดต่อเรา</p>
              <p>ข้อกำหนดและเงื่อนไข</p>
              <p>นโยบายความเป็นส่วนตัว</p>
            </Col>
            <Col span={6}>
              <p className="text-xl">บริการลูกค้า</p>
              <div className="text-xs">
                <p>บริการจัดส่งสินค้า</p>
                <p>การยกเลิกการสั่งซื้อสินค้า</p>
                <p>การรับประกันสินค้า</p>
                <p> การคืนสินค้าและการคืนเงิน</p>
              </div>
            </Col>
            <Col span={6}>
              <p className="text-xl">ติดต่อเรา</p>
              <div className="text-xs">
                <p>123 ถนน สายไหม แขวง สายไหม เขต สายไหม กรุงเทพมหานคร</p>
                <p>10220</p>
                <p>099-999-999 example@example.com</p>
              </div>
              <div>
                <IconFont type="icon-facebook" style={{ color: "#1877F2" }} />
                <IconFont type="icon-twitter" className="p-2" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;
