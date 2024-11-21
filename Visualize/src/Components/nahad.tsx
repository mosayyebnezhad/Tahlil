export const Nahad = ({ rule }: { rule?: "server" | "normal" | "loss" }) => {


    const classnames: string = `entity w-24 h-24 rounded-full bg-gray-900 ${rule === "server" && "bg-green-400"} ${rule === "loss" && "bg-red-600"}`
    return (

        <div className={classnames} ></div>

    )
}