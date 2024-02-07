import multer from 'multer'

const slipDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/upload/slip')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

export const uploadSlipMiddleware = multer({ storage: slipDiskStorage });