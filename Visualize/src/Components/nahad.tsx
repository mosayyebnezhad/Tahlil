
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgress from './progressBar';

export const Nahad = ({ rule,  }: { rule?: "server" | "normal" | "loss", progress?: number }) => {


    const classnames: string = `flex justify-center items-center w-24 h-24 rounded-full bg-gray-900 ${rule === "server" && "bg-green-400"} ${rule === "loss" && "bg-red-600"}`
    return (

        <div className={classnames} >





            {rule === "server" &&  <CircularProgress time={1000}/>}


          

        </div >

    )
}




export const Loading = () => {
    return (

        <svg
            width={32}
            height={32}
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"

        >
            <path
                d="M16.239 62.268c0 25.975 18.833 43.674 39.987 47.334a4.446 4.446 0 1 1-1.519 8.764c-24.84-4.301-47.36-25.242-47.36-56.098 0-13.116 5.965-23.424 12.928-31.258 4.992-5.615 10.701-10.18 15.292-13.67H21.606a4.267 4.267 0 0 1 0-8.533h25.6a4.267 4.267 0 0 1 4.267 4.267v25.6a4.267 4.267 0 0 1-8.533 0V22.921l-.009.017c-4.881 3.669-10.837 8.166-16 13.978-6.101 6.861-10.692 15.155-10.692 25.344m94.788 3.465c0-25.702-18.432-43.29-39.313-47.215a4.446 4.446 0 1 1 1.638-8.738c24.525 4.608 46.566 25.429 46.566 55.953 0 13.116-5.965 23.415-12.928 31.258-4.992 5.615-10.701 10.18-15.292 13.67h13.961a4.267 4.267 0 1 1 0 8.533h-25.6a4.267 4.267 0 0 1-4.267-4.267v-25.6a4.267 4.267 0 1 1 8.533 0v15.744h.017c4.873-3.686 10.837-8.175 15.991-13.995 6.101-6.852 10.692-15.147 10.692-25.344"
                fill="white"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>


    )
}



