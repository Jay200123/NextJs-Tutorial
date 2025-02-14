export default function ProductLayout({ children } : {
    children: React.ReactNode
}){
    return(
        <div>
            <h3>Product Layout</h3>
            <main>{children}</main>
        </div>
    )
}