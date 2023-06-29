import RefferalMobile from "@/components/PageComponents/referral/index";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import { TABLE_HEAD } from "@/constant/components/Referral";
import useWidth from "@/hooks/useWidth";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import NoreferralSVG from "@/components/svg/NoreferralSVG"

export default function History() {
  const user = useSelector((state: RootState) => state.users.user);
  const router = useRouter();
  const { width } = useWidth();
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (width < 1024) {
      return;
    }
    fetch(`${process.env.SERVER}/users/${user?._id}/referral`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data?.referredUsers);
        setIsLoading(false);
      });
  }, [user?._id, width]);
  if (width < 1024) {
    return <RefferalMobile data={data} isLoading={isLoading} />;
  }
  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4">
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-md">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0  md:h-[54px]"
          >
            <div className="flex justify-between flex-row items-center">
              <span className="flex gap-[14px] items-center justify-center px-[1rem] md:px-0">
                <div
                  onClick={() => router.push("/authentication")}
                  className="md:hidden block"
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
              </span>
            </div>
          </CardHeader>
          <CardBody className="px-0 p-0 md:bg-[#F6FBFF] bg-[#D3ECFF] w-full overflow-x-auto ">
            <div className="block">
              {isLoading ? (
                <div className="h-[65vh] flex items-center justify-center">
                  <Player
                    autoplay
                    loop
                    src="/assets/jsonGif/ManAndRobotWithComputers.json"
                    style={{ minHeight: "50vh", width: "75%" }}
                    className="p-0"
                  />
                </div>
              ) : (
                <table className="w-full table-auto text-left">
                  <thead className="w-full ">
                    <tr className="bg-[#D3ECFF] h-[55px] flex w-full justify-between px-2 md:pl-[35px] py-[17px] md:pr-[42px]">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`${head.class} flex items-center`}
                        >
                          <Typography
                            className={`font-Inter font-semibold text-start text-lg leading-[22px] text-[#181C32] `}
                          >
                            {head.title}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {
                      data?.map((item: any, index: number) => {
                        const isLast = index === data.length - 1;
                        const date = new Date(item?.userId?.createdAt)
                        const classes = isLast
                          ? ""
                          : "border-b border-dashed border-[#e4e3e3]";
                        return (
                          <tr
                            className="flex hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out"
                            key={index}
                          >
                            <td
                              className={`${classes} py-[13px] px-[40px] h-[55px] basis-[14.5%]`}
                            >
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                              >
                                {index + 1}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[1vh] h-[55px] basis-[16%] mx-[-2.5vh]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item?.userId?.name}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[25%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {date?.toLocaleString()}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[28%]`}
                            >
                              <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                {item?.userId?.email}
                              </Typography>
                            </td>
                            <td
                              className={`${classes} flex items-center justify-start py-[10px] px-[22px] h-[55px]  basis-[20%]`}
                            >
                              <div className="w-full items-center justify-start flex">
                                <div className="h-[35px] cursor-pointer text-center w-[96px]  flex items-center bg-[#D7E8FD] hover:bg-[#005AE2] text-[#005AE2] hover:text-white justify-center rounded-[8px] duration-500 ease-in-out">
                                  <span className="font-Inter font-medium text-[15.3px] leading-[18.52px] text-center text-inherit">
                                    View more
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
            {!isLoading &&
              (data?.length === 0 || !data) && (
                <div className="w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                  <div className="flex flex-col justify-center items-center gap-7">
                    <NoreferralSVG />
                    <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                      No referral
                    </span>
                  </div>
                </div>
              )}
          </CardBody>
        </Card>
      </div>
    </LayoutDashBoard>
  );
}
