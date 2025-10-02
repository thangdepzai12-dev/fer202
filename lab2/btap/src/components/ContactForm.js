import React from 'react';

export default function ContactForm(){
  return (
    <section id="contact" className="my-5">
      <h3>Liên hệ đặt hàng</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Họ và tên" />
        </div>
        <div className="col-md-6">
          <input type="tel" className="form-control" placeholder="Số điện thoại" />
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="3" placeholder="Yêu cầu thêm..."></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Gửi</button>
        </div>
      </form>
    </section>
  );
}
