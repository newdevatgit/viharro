function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <h1 className="text-lg font-semibold">VIHARRO</h1>
        <p className="text-sm text-gray-400 mt-1">
          &copy; {new Date().getFullYear()} VIHARRO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
