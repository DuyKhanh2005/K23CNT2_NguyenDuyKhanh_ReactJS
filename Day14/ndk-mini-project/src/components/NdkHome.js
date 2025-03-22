import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const NdkHome = () => {
    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="home-title"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                🚀 Nguyễn Duy Khánh - Mini Project
            </motion.h1>
            <motion.p
                className="home-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Chào mừng bạn đến với hệ thống quản lý người dùng!
                Bạn có thể xem danh sách hoặc thêm mới người dùng.
            </motion.p>
            <motion.div
                className="button-container"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <Link to="/list-user" className="home-button">📋 Danh sách User</Link>
                <Link to="/create-user" className="home-button">➕ Thêm User</Link>
            </motion.div>
        </motion.div>
    );
};

export default NdkHome;
