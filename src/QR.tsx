import './App.css'
import QRCode from './assets/image-qr-code.png'

function QR() {
  return (
    <div className="QR">
      <img alt='QRCode' className='QRImage' src={QRCode}></img>
    </div>
  )
}

export default QR
