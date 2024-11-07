import {
  AppstoreOutlined,
  CarTwoTone,
  createFromIconfontCN,
  DownOutlined,
  InboxOutlined,
  PhoneOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Input, Space } from "antd";

function Navbar() {
  const users: MenuProps["items"] = [
    {
      key: "1",
      label: <a target="_blank">บัญชีของฉัน</a>,
    },
    { key: "2", label: <a target="_blank"> รายการโปรด</a> },
    {
      key: "3",
      label: <a target="_blank"> รายการคำสั่งซื้อ</a>,
    },
    {
      key: "4",
      label: <a target="_blank"> คูปองของฉัน</a>,
    },
    {
      key: "5",
      label: <a target="_blank"> ออกจากระบบ</a>,
    },
  ];

  const product: MenuProps["items"] = [
    {
      key: "1",
      label: <a target="_blank">Keychron K6</a>,
    },
    {
      key: "2",
      label: <a target="_blank">Keychron K6</a>,
    },
    {
      key: "3",
      label: <a target="_blank">Keychron K6</a>,
    },
    {
      key: "4",
      label: <a target="_blank">Keychron K6</a>,
    },
    {
      key: "5",
      label: <a target="_blank">Keychron K6</a>,
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          ภาษาไทย
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          ภาษาอังกฤษ
        </a>
      ),
    },
  ];
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overridden)
      "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
    ],
  });

  return (
    <>
      <div className="p-4 text-base bg-fuchsia-600">
        <div className="container flex justify-between mx-auto text-white">
          <div
            className="flex gap-4.
          "
          >
            <p>
              {" "}
              <PhoneOutlined rotate={90} className="mr-2" />
              099-999-999
            </p>

            <p>
              {" "}
              <InboxOutlined /> example@example.com
            </p>
            <p>นึกถึง keeblur นึกถึงคีย์บอร์ด</p>
          </div>
          <div className="flex">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  ไทย
                  <DownOutlined className="text-xs" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="container flex items-center justify-between mx-auto my-4">
        <div className="flex ">
          {" "}
          <div className="mr-4">
            <CarTwoTone />
          </div>
          <div className="flex gap-2">
            <Dropdown menu={{ items: product }}>
              <a className="flex space-x-2" onClick={(e) => e.preventDefault()}>
                {" "}
                <AppstoreOutlined />
                <p> สินค้าทั้งหมด</p>
                <DownOutlined className="mt-1 text-xs" />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="flex items-center">
          {" "}
          <Input
            size="large"
            type="text"
            className="w-[30rem] border rounded-lg"
            placeholder="ค้นหาสินค้า"
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="flex items-center space-x-2">
          <IconFont type="icon-shoppingcart " />
          <Dropdown menu={{ items: users }}>
            <a onClick={(e) => e.preventDefault()}>
              {" "}
              <UserOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default Navbar;
