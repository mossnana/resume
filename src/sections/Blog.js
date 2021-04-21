import React, {Component} from 'react';
import firebase from 'firebase';
import config from '../firebase/Firebase';

import MainLayout from '../MainLayout';

firebase.initializeApp(config);

class Blog extends Component {
  constructor(props){
    super(props);
    this.ref = firebase.firestore().collection('blog');
    this.unsubscribe = null;
    this.state = {
      blog: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    // สร้าง Array ชื่อ boards
    const blog = [];
    /* 
    ทำการ loop ค่า querySnapshot ที่ส่งเข้า
    ค่า querySnapshot แปลงเป็น doc
    */
    querySnapshot.forEach((doc) => {
      // ดึงข้อมูลตัวแปล 1 object เก็บในตัวแปล title, description, author ผ่านฟังก์ชั่น data()
      const { title, detail, date, by, tag, image } = doc.data();
      // เอา object ใหม่ใส่เข้าไปใน Array ชื่อ boards
      blog.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        detail,
        date,
        by,
        tag,
        image
      });
    });
    // เอาข้อมูล array boards อัพเดทใน state App
    this.setState({
      blog
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render(){
    return (
    <MainLayout>
    <div role="tabpanel" className="tab-pane fade in active" id="blog">
      <div className="inside-sec">
        <h5 className="tittle">BLOG</h5>
        <section className="blog blog-page padding-20 padding-top-50 padding-bottom-50 ">
          {this.state.blog.map(post =>
                  <article>
                    <img className="img-responsive" src={post.image} alt="" />
                    <div className="post-info">
                      <div className="post-in">
                        <div className="extra"> <span><i class="fas fa-calendar-alt"></i>{post.date}</span> <span className="margin-left-15"><i class="fas fa-user-tag"></i>{post.by}</span> <span className="margin-left-15"><i class="fas fa-tag"></i> {post.tag}</span></div>
                        <a href="#." className="tittle-post"> {post.title} </a>
                        <p>{post.detail}</p>
                        
                      </div>
                    </div>
                  </article>
          )}
        </section>
      </div>
    </div>
    </MainLayout>
  )
  }
}

export default Blog;