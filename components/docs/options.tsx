import styles from './style.module.css'

export function OptionTable({ options }: { options: [string, any] }) {
    return (
        <div
            className={
                '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
                styles.container
            }
        >
            <table className="w-full border-collapse text-sm">
                <tbody className="align-baseline text-gray-900 dark:text-gray-100">
                    {options.map(([option, description]) => (
                        <tr
                            key={option}
                            className="border-b border-gray-100 dark:border-neutral-700/50"
                        >
                            <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-[#67B5FB] dark:text-[#67B5FB]">
                                <span className='w-fit h-fit p-0.5 px-1 bg-neutral-800 border border-[#67B5FB]/5 rounded-[5px]'>{option}</span>
                            </td>
                            <td className="py-2 pl-6">{description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}