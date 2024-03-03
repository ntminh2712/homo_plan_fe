import React from "react";
import {
  Breadcrumb,
  Layout,
  Menu,
  MenuProps,
  Tabs,
  TabsProps,
  theme,
} from "antd";
import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { DailyChallengeItems } from "../../components/dashboard/DailyChallengeItems";
import { RankingListItems } from "../../components/dashboard/RankingListItems";
import { MoneyHistoryItems } from "../../components/dashboard/MoneyHistoryItems";

const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Logout", "2", <LogoutOutlined />),
];

export const DashboardView = () => {
  return (
    <div className="min-h-[100vh] bg-[#0f123b]">
      <Layout className="h-full min-h-[100vh] p-4 bg-[#0f123b]">
        <Sider width={288} style={{ background: "#0f123b" }}>
          <div className="h-full bg-[#060b26] rounded-[20px]">
            <p className="text-[14px] tracking-[18%] font-medium text-center pt-[29px]">
              VISION UI FREE
            </p>
            <div
              className="w-[calc(100%-32px)] h-[1px] mt-[37px] mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
              }}
            ></div>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                borderRight: 0,
                borderRadius: "10px",
                background: "#060b26",
                padding: "24px 16px",
              }}
              items={items}
            />
          </div>
        </Sider>
        <Layout style={{ padding: "0 24px", background: "#0f123b" }}>
          <div className="flex items-center justify-between">
            <div>
              <Breadcrumb separator={<div className="text-white">/</div>}>
                <Breadcrumb.Item>Pages</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <p className="text-[14px] leading-5 font-medium mt-1.5">
                Dashboard
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-[50px] h-[50px] rounded-[12px]">
                <img src="/img/avatar.png" alt="" className="rounded-[12px]" />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-[18px]">Nguyen Van A</p>
                <p className="text-[14px] text-gray-1">test@gmail.com</p>
              </div>
            </div>
          </div>

          <Content className="mt-9 flex flex-col">
            <div>
              <div className="w-[382px] h-[80px] bg-primary rounded-[20px] flex items-center justify-between px-5">
                <div className="flex flex-col">
                  <p className="text-[12px] text-gray-1 font-medium">
                    Daily rewards
                  </p>
                  <div className="flex items-center gap-x-[4.5px]">
                    <p className="text-[18px] font-bold">$53,000</p>
                    <p className="text-[14px] font-bold text-green-1">+55%</p>
                  </div>
                </div>
                <div className="w-[45px] h-[45px]">
                  <img src="/img/icon1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex h-full gap-x-6">
              <div className="w-[63%] bg-[#060b26] mt-6 p-6 rounded-[20px]">
                <div>
                  <div className="flex items-center gap-x-4">
                    <div className="w-[300px] cursor-pointer h-[49px] bg-[#0075ff] rounded-[10px] text-[18px] flex items-center justify-center">
                      Nhiệm vụ hàng ngày
                    </div>
                    <div className="w-[300px] cursor-pointer h-[49px] bg-[#0F874D4D] text-[#fff]/[0.8] rounded-[10px] text-[18px] flex items-center justify-center">
                      Thử thách
                    </div>
                  </div>
                </div>
                <div
                  className="w-full h-[1px] mt-4"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
                  }}
                ></div>
                <div className="mt-4 flex flex-col gap-y-4">
                  <DailyChallengeItems />
                  <DailyChallengeItems />
                  <DailyChallengeItems />
                </div>
              </div>
              <div className="w-[37%] flex flex-col mt-6 gap-y-2.5">
                <div className="bg-[#060b26] p-6 rounded-[20px]">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[18px]">Ranking</p>
                    <p className="text-[14px] text-gray-1">
                      Rank của bạn:{" "}
                      <span className="text-[#0075ff] text-[16px] font-semibold">
                        #1234
                      </span>
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-1">
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                    <RankingListItems />
                  </div>
                </div>

                <div className="bg-[#060b26] p-6 rounded-[20px]">
                  <div className="flex flex-col items-start justify-start">
                    <p className="font-bold text-[18px]">
                      Lịch sử nhận tiền hàng ngày
                    </p>
                    <p className="text-[14px] text-gray-1 mt-1">
                      30 done this month
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-y-2">
                    <MoneyHistoryItems />
                    <MoneyHistoryItems />
                    <MoneyHistoryItems />
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
