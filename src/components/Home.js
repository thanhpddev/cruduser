import userEvent from "@testing-library/user-event"

function Home() {
    return ( 
        <div className="mt-4">
            <p>Sử dụng API từ trang web https://reqres.in/.<br/>Sử dụng thư viện React để tạo website cơ bản gồm các chức năng:</p>
            <ul>
                <li>1. Đăng nhập.</li>
                <li>2. Thêm user.</li>
                <li>3. Sửa user.</li>
                <li>4. Xóa user.</li>
                <li>5. Hiển thị user.</li>
                <li>6. Tìm kiếm user theo email.</li>
                <li>7. Sắp xếp user.</li>
                <li>8. import/export user từ file .csv</li>
            </ul>
        </div>
     );
}

export default Home;