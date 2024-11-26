
const Loading = () => {
  return (
    <div className="h-screen w-screen fixed z-[99999] bg-white top-0 left-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-main-green"></div>
    </div>
  )
}

export default Loading