function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center gap-[12vw]">
      <aside className="relative h-full">
        <p className="font-head text-[25vh] leading-[28vh] opacity-10 blur-sm">
          4<br />
          0<br />
          4
        </p>
        <p className="font-head text-[12vh] leading-[16vh] absolute top-20 left-20 opacity-80">
          4<br />
          0<br />
          4
        </p>
      </aside>
      <div>
        <h1 className="title">Page Not Found</h1>
        <a href="/">
          <button className="text-green"><p className="un">Back to home page</p></button>
        </a>
      </div>
    </main>
  )
}

export default NotFound;
