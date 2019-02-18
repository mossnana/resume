import React, {Component} from 'react';
import MainLayout from '../MainLayout';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weSection : false,
      iosSection : false,
      androidSection : false,
      llSection : false
    }
    this.weSection = React.createRef();
    this.iosSection = React.createRef();
    this.androidSection = React.createRef();
    this.llSection = React.createRef();
  }

  collapseHandle = (e) => {
    e.preventDefault();
    // Major Section
    if (!this.state.weSection) {
      this.weSection.current.className = "panel-collapse collapse in"
      this.setState({
        weSection : true
      })
    }else {
      this.weSection.current.className = "panel-collapse collapse"
      this.setState({
        weSection : false
      })
    }
    // iOS Skill Section
    if (!this.state.iosSection){
      this.iosSection.current.className = "panel-collapse collapse in"
      this.setState({
        iosSection : true
      })
    }else {
      this.iosSection.current.className = "panel-collapse collapse"
      this.setState({
        iosSection : false
      })
    }
    // Android Skill Section
    if (!this.state.androidSection){
      this.androidSection.current.className = "panel-collapse collapse in"
      this.setState({
        androidSection : true
      })
    }else {
      this.androidSection.current.className = "panel-collapse collapse"
      this.setState({
        androidSection : false
      })
    }
    // Long Life Skill Section
    if (!this.state.llSection){
      this.llSection.current.className = "panel-collapse collapse in"
      this.setState({
        llSection : true
      })
    }else {
      this.llSection.current.className = "panel-collapse collapse"
      this.setState({
        llSection : false
      })
    }
  }

  render() {
    return (
      <MainLayout>
        <div role="tabpanel" className="tab-pane fade in active" id="resume">
          <div className="inside-sec">
            <h5 className="tittle">Bio & Skills</h5>
            <div className="bio-info padding-30">
              <p> 
                สวัสดีครับ ผมชื่อ นายเพิ่มพูน เชาวนพูนผล บ้านเกิดอยู่ที่จังหวัดเชียงใหม่ ปัจจุบันอายุ 25 ปี เชื้อชาติไทย สัญชาติไทย ศาสนาพุทธ แต่บัจจุบันอาศัยอยู่แถว โชคชัย 4 ลาดพร้าว กทม. สำเร็จการศึกษาในระดับมัธยมต้นและมัธยมปลายที่ โรงเรียนปรินส์รอยแยลล์วิทยาลัย เข้าศึกษาต่อระดับปริญญาตรีที่มหาวิทยาลัยเชียงใหม่ ในคณะวิทยาศาสตร์ สาขาธรณีวิทยา
                <br />
                <br />
                หลังจากจบจากการเรียนปริญญาตรี ก็ได้เริ่มการทำงานที่บริษัทไพศาลการแร่จำกัด จังหวัดลำปาง ซึ่งเป็นบริษัทรับทำรายงานแผนผังการทำเหมืองและรายงานธรณีวิทยาเหมือง ให้กับเหมืองรายย่อยต่างๆ ซึ่งตำแหน่งที่ทำในตอนนั้นคือ นักธรณีวิทยาภาคสนาม มีหน้าที่ในการเก็บข้อมูลการสำรวจทางด้านธรณีวิทยาของเหมืองแร่เพื่อนำกลับมาทำเป็นรายงานธรณีวิทยาเหมืองแร่ หลังจากทำงานมาได้ 9 เดือน มีความอยากเปลี่ยนงานไป อาศัยอยู่กรุงเทพ จึงตัดสินใจลาออกและไปหางานในกรุงเทพ
                <br />
                <br />
                พอดีว่าตอนนั้นมีเพื่อนที่ กรมทรัพยากรธรณี แนะนำให้ไปทำงานตำแหน่งนักธรณีวิทยาจ้างเหมา จึงลองเขาไปทำงานดู รู้สึกว่าก็สนุกดีในช่วงแรกๆของการทำงาน ที่ได้เดินทางไปออกภาคสนามในหลายๆจังหวัด แต่พอทำงานไปสักพักก็รู้สึกว่ายังไม่ใช่ประเภทงานที่ตัวเองไฝ่ฝัน หลังจากทำงานไป 6 เดือน พอดีได้เริ่มคิดเปลี่ยนสายงานอาชีพ ตอนนั้นมีบริษัทรับเหมาก่อสร้างรายใหญ่ต้องการตำแหน่งงานสำรวจหลายอัตราจึงลองไปสมัครเข้าทำงานที่นั่นดู
                <br />
                <br />
                งานในบริษัทรับเหมาก่อสร้างนี้ผมทำหน้าที่ในตำแหน่ง ช่างสำรวจ ซึ่งเนื้องานแตกต่างจาก สายงานที่ตัวเองเรียนมาอย่างสิ้นเชิง แต่ผมก็สามารถเรียนรู้ได้ แต่ทำงานไปสักระยะ ผมก็เริ่มมีความคิดว่า ถ้าเราเลือกที่จะเปลี่ยนสายงานแล้ว ทำไมไม่ลองทำในสิ่งที่ตังเองชอบ 
                <br />
                <br />
                ส่วนตัวแล้วผมเริ่มมีความสนใจในด้านคอมพิวเตอร์ตั้งแต่ ป.6 แล้ว โดยเริ่มสนใจจากการที่ได้ลองสร้างเว็บไซต์แบบง่าย ๆเป็นของตัวเอง จำได้ว่าตอนนั้น ลองใช้โฮสของเว็บไซต์ .th.gs แต่หลังจากนั้นก็ไม่ได้ศึกษาจริงจัง แค่ศึกษาแบบผิวเผิน ทำให้ชอบด้านเทคโนโลยีไปด้วย พอ ม.6 ตอนแรกกะเรียนต่อใน คณะวิทยาการคอมฯ แต่ด้วยความที่รู้สึกว่ากลัวทำในสิ่งที่ตัวเองรักได้ไม่ดี ประกอบกับตอนนั้น มัวแต่คิดว่า เรียนคณะนี้แล้วจบมาจะได้งานไม่ดี <strong>โดยลืมคิดไปว่า เราควรทำในสื่งที่จะเองชอบ เพราะ ไม่ว่าเราจะผิดพลาดกับสิ่งเหล่านั้นขนาดไหน เราก็จะไม่ท้อที่จะพัฒนาตัวเองในด้านนั้น</strong>
                <br />
                <br />
                หลังจากที่ผมคิดแบบนั้นแล้ว ผมจึงเลือกที่จะเริ่มศึกษาเรื่องเกี่ยวกับ ไอที อย่างจริงจังมากขึ้น โดย เรียนรู้จากอินเตอร์เน็ต ตัดสินใจไปเรียน ปริญญาโท ซึ่งในเวลานั้นที่ผมตัดสินใจจะเรียนต่อ มีที่เดียวที่ตอนนั้นเปิดรับ คือ มหาวิทยาลัยธุรกิจบัณฑิตย์ ด้วยอายุที่มากขึ้น ซึ่งผมมีความกังวลมากเพราะจบมา 3 ปีแล้ว แต่ยังไม่สามารถจับงานเป็นหลักแหล่งได้เลย ผมจึงต้องสมัครในที่ๆ พร้อมรับผมเข้าเรียนเลยในเวลานั้น ผมไปดูหลักสูตรแล้วก็ค่อนข้างดี ทางหลักสูตรจะไม่ค่อยลงทฤษฎีมาก เน้นปฏิบัติและนำไปใช้ เนื่องจากเรียนเสาร์ อาทิตย์ ช่วงว่างงานอยู่นี้ ผมจึงลองศึกษาเนื้อหาเพิ่มเติมด้วยตัวเองจากสื่อหลายๆด้าน
              </p>
              <div className="skills">
                <h5 className="margin-top-30">Hard Skills</h5>
                <h6>Majors</h6>
                <div className="panel-group accordion" id="accordion5">
                  <div className="panel panel-default">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel-heading">
                          <h4 className="panel-title"> <a onClick={this.collapseHandle} className="collapsed" > Web Engineering</a> </h4>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" > <span className="sr-only">60% Complete</span> </div>
                        </div>
                        <div id="collapseOne5" className="panel-collapse collapse" ref={this.weSection}>
                          <div className="panel-body">
                            <p>Beginner Full Stack Development</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>Mobile Application Development</h6>
                  <div className="panel panel-default">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel-heading">
                          <h4 className="panel-title"> <a onClick={this.collapseHandle} className="collapsed">Beginner iOS Development</a> </h4>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" > <span className="sr-only">60% Complete</span> </div>
                        </div>
                        <div id="collapsetwo5" className="panel-collapse collapse" ref={this.iosSection}>
                          <div className="panel-body">
                            <p>Xcode - Swift : Native iOS Dev.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel-heading">
                          <h4 className="panel-title"> <a onClick={this.collapseHandle} className="collapsed">Beginner Android Development</a> </h4>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" > <span className="sr-only">60% Complete</span> </div>
                        </div>
                        <div id="collapsetwo5" className="panel-collapse collapse" ref={this.androidSection}>
                          <div className="panel-body">
                            <p>Android Studio - Kotlin : Native Android Dev.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="margin-top-30">Soft Skills</h5>
                <h6>Application of knowledge</h6>
                <div className="panel-group accordion" id="accordion1">
                  <div className="panel panel-default">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel-heading">
                          <h4 className="panel-title"> <a onClick={this.collapseHandle} className="collapsed"> Long life learning</a> </h4>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" > <span className="sr-only">60% Complete</span> </div>
                        </div>
                        <div id="collapsethr" className="panel-collapse collapse" ref={this.llSection}>
                          <div className="panel-body">
                            <p>I'm Googler. Google is my personal teacher. I always love learning new things.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ethical">
                  <h6>Follow ethical work practices</h6>
                  <a href="#.">Prioritize Learning Tasks</a> <a href="#.">Make Ethical Choices</a> <a href="#.">Social Work</a> <a href="#.">Community Work</a>
                </div>
              </div>
            </div>
          </div>
          <div className="inside-sec margin-top-30">
            <h5 className="tittle">Professional Experience</h5>
            <div className="padding-30 exp-history">
              <div className="exp">
                <div className="media-left"> <span className="sun">2016 - 2017</span> </div>
                <div className="media-body">
                  <div className="company-logo"> <img src="images/company-logo-1.jpg" alt="" /> </div>
                  <h6>Geologist</h6>
                  <p>Geological Report</p>
                  <p>Paisarn Karn Rare company, Lampang, Thailand</p>
                  <p className="margin-top-10"> Field Geologist and Generate geological report from field datas. <a href="https://www.facebook.com/paisankarnrae/"> Read More</a> </p>
                </div>
              </div>
              <div className="exp">
                <div className="media-left"> <span className="sun">2017 - 2018</span> </div>
                <div className="media-body">
                  <div className="company-logo"> <img src="images/company-logo-2.jpg" alt="" /> </div>
                  <h6>Surveyor</h6>
                  <p>Land Civil and Building Survey</p>
                  <p>Unique Engineering and Construction PLC., BKK, Thailand</p>
                  <p className="margin-top-10"> Survey Buliding and Locate.<a href="http://www.unique.co.th/th/"> Read More</a> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inside-sec margin-top-30">
            <h5 className="tittle">Academic Background</h5>
            <div className="padding-30 exp-history">
              <div className="exp">
                <div className="media-left"> <span className="sun">2012 - 2016</span> </div>
                <div className="media-body">
                  <div className="company-logo"> <span className="diploma"><i className="fa fa-graduation-cap"></i> Download Diploma</span> </div>
                  <h6>Geological Science</h6>
                  <p>Faculty of Science, Chiang Mai University</p>
                  <p>Chiang Mai, Thailand</p>
                  <p className="margin-top-10">Geology is an earth science concerned with the solid Earth, the rocks of which it is composed, and the processes by which they change over time. <a href="http://www.geol.science.cmu.ac.th/">Read More</a> </p>
                </div>
              </div>
              <div className="exp">
                <div className="media-left"> <span className="sun">2018 - Present</span> </div>
                <div className="media-body">
                  <div className="company-logo"> <span className="diploma"><i className="fa fa-graduation-cap"></i> Download Diploma</span> </div>
                  <h6>Web Engineering and Mobile App. Dev.</h6>
                  <p>ANT, Dhurakij Pundit University</p>
                  <p>BKK, Thailand</p>
                  <p className="margin-top-10"> Website and Mobile Application Developing Processes <a href="http://ant.dpu.ac.th/we">Read More</a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }
  
}

export default Resume;