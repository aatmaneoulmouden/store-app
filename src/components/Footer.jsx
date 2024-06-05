const Footer = () => {
    const date = new Date;
    const currentYear = date.getFullYear();
  return (
    <footer>
        <p className="text-center text-sm pb-5">&copy; {currentYear} - Store app by Aatmane Oulmouden</p>
    </footer>
  )
}

export default Footer