import { linked_card } from "@/lib/data"
import { getImage } from "@/assets/images/assets"
import { List } from "@/components/docs/list"
import { Theme } from "@/context"
import Image from "next/image"
import Link from "next/link"

type Props = {
    icon: string,
    title: string
    link: string
}

export const LinkedCards = () => {
    return (
        <List
            className="grid grid-cols-3 gap-5 my-8"
            data={linked_card}
            renderItem={(item, index) => <LinkedCard key={"random" + index} {...item} />}
        />
    )
}

export const LinkedCard = ({ icon, title, link }: Props) => {
    return (
        <Link href={link} className="flex flex-col items-center justify-center w-full rounded-[14px] border border-neutral-700/50 h-40 cursor-pointer">
            <Image src={getImage(icon, Theme.orange)} height={50} width={50} alt="" />
            <span className="text-md my-2">{title}</span>
        </Link>
    )
}