import "app/favicon.ico"
import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/bootstrap.css"
import "public/assets/css/style.css"
import "public/assets/css/responsive.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata = {
    title: 'Vanisri Opticals',
    description: '',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <SpeedInsights />
            </body>
        </html>
    )
}
