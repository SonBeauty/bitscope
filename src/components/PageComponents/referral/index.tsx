import LayoutDashBoard from "@/components/layout/Layout"
import BackLeftSVG from "@/components/svg/BackLeftSVG"
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG"
import { Player } from "@lottiefiles/react-lottie-player"
import { Card, CardBody, CardHeader } from "@material-tailwind/react"
import { useRouter } from "next/router"
import { FaUser } from 'react-icons/fa';

interface ReferralMobileProps {
    data: any
    isLoading: boolean
}

export default function ReferralMobile({ data, isLoading }: ReferralMobileProps) {
    const router = useRouter()
    return (
        <LayoutDashBoard className="md:p-5 py-[15px] relative bg-[#F6FBFF]">
            <Card className="h-full bg-[#F6FBFF] flex flex-col gap-[6px] w-full max-h-[795.08px] p-0 m-0 shadow-none">
                <div className="relative">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0 p-3 px-[16px] h-[54px]"
                    >
                        <div className="flex justify-between flex-row items-center h-full">
                            <span className="flex gap-[14px] items-center justify-center">
                                <div onClick={() => router.push("/authentication")}>
                                    <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                                </div>
                                <span className="font-Inter text-white text-lg leading-5 font-bold">
                                    Referral
                                </span>
                            </span>
                        </div>
                    </CardHeader>
                </div>
                <CardBody className={`px-0 p-0 w-full overflow-auto `}>
                    {isLoading ? (
                        <div className="bg-white  flex items-center justify-center h-[75vh]">
                            <Player
                                autoplay
                                loop
                                src="/assets/jsonGif/ManAndRobotWithComputers.json"
                                style={{
                                    height: "11.13rem",
                                    width: "20.3rem",
                                    background: "#FFFFFF"
                                }}
                                className="p-0"
                            />
                        </div>
                    ) : data.length <= 0 ? (
                        <div className="bg-[#F6FBFF] w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                            <div className="flex flex-col justify-center items-center gap-7">
                                <NoAccessHistorySVG />
                                <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                                    No Referral
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-[6px] bg-[#F5F5F5] items-center justify-center">
                            {data?.map((item: any, index: any) => {
                                const date = new Date(item?.userId?.createdAt)
                                return (
                                    <div
                                        key={index}
                                        className="flex w-full justify-between gap-[10px] items-center bg-white py-[12px] px-[10px]"
                                    >
                                        <div className="flex gap-[7px] items-center">

                                            <div className="flex flex-col gap-[7px] justify-center items-center">
                                                <div className="flex gap-[6px]">
                                                    {item?.userId?.email}
                                                </div>
                                                <div className=" flex justify-start w-full items-center gap-[12px]">
                                                    <span
                                                        className={`text-[#1C1C1C] font-normal text-base leading-5 font-Inter`}
                                                    >
                                                        {date?.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-[89px] flex flex-col items-center h-full gap-[5px]">
                                            <div className="relative justify-around items-center gap-1">
                                                <div className="h-[35px] cursor-pointer text-center w-[96px]  flex items-center bg-[#D7E8FD] hover:bg-[#005AE2] text-[#005AE2] hover:text-white justify-center rounded-[8px] duration-500 ease-in-out">
                                                    <span className="font-Inter font-medium text-[15.3px] leading-[18.52px] text-center text-inherit">
                                                        View more
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="py-7 visible" />
                        </div>
                    )}
                </CardBody>
            </Card>
        </LayoutDashBoard>
    )
}