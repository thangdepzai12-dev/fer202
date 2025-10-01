import React from "react";
import StudentCard from "./StudentCard";

function StudentsDetail() {
  return (
    <div className="container">
      <h3 className="text-center my-4">Students Detail</h3>
      <div className="row">
        <StudentCard img="https://i.imgur.com/Yf6I9rR.jpg" name="Nguyễn Hữu Quốc Khánh" id="DE160102" group="s1" />
        <StudentCard img="https://i.imgur.com/nVY7mKN.jpg" name="Ông Văn Thiện" id="DE190377" group="s2" />
        <StudentCard img="https://i.imgur.com/UeJ8mMp.jpg" name="Đỗ Nguyên Phúc" id="DE180467" group="s3" />
        <StudentCard img="https://i.imgur.com/5xWQWD7.jpg" name="Lê Hoàng Minh" id="DE170094" group="s4" />
      </div>
    </div>
  );
}

export default StudentsDetail;
