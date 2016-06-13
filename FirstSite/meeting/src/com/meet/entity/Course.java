package com.meet.entity;

import java.text.DateFormat;
import java.text.ParseException;
import java.util.Date;

public class Course {
private static final long serialVersionUID = 1L;
	
	private static int courseId;
    private String courseName;//课程名称
    private int isavaliable;//1 正常　２　下架   3删除
    private static String addTime;//课程添加时间
    private int lessionNum;//课时
    private String logo;//课程图片
    private Date updateTime;
    private Date endTime;//有效结束时间
    private int loseType;//有效期类型，0：到期时间，1：按天数
    private String studyPercent;//课程学习进度百分比
    
    
    
	public int getCourseId() {
		return courseId;
	}



	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}



	public String getCourseName() {
		return courseName;
	}



	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}



	public int getIsavaliable() {
		return isavaliable;
	}



	public void setIsavaliable(int isavaliable) {
		this.isavaliable = isavaliable;
	}



	public String getAddTime() {
		return addTime;
	}



	public void setAddTime(String addTime) {
		this.addTime = addTime;
	}



	public int getLessionNum() {
		return lessionNum;
	}



	public void setLessionNum(int lessionNum) {
		this.lessionNum = lessionNum;
	}



	public String getLogo() {
		return logo;
	}



	public void setLogo(String logo) {
		this.logo = logo;
	}



	public Date getUpdateTime() {
		return updateTime;
	}



	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}



	public Date getEndTime() {
		return endTime;
	}



	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}



	public int getLoseType() {
		return loseType;
	}



	public void setLoseType(int loseType) {
		this.loseType = loseType;
	}



	public String getStudyPercent() {
		return studyPercent;
	}



	public void setStudyPercent(String studyPercent) {
		this.studyPercent = studyPercent;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

 public void sort() throws ParseException{

		Date nowtime = new Date((System.currentTimeMillis()));
		Date time1 = DateFormat.getDateInstance().parse(addTime);
		long d = nowtime.getTime() - time1.getTime();
		long day = d/(24*60*60*1000);
		long hour = (d/(60*60*1000) - day*24);
		long min = ((d/(60*1000)) - day*24*60 - hour*60);
		long second = (d/1000 - day*24*60*60 - hour*60*60 - min*60);
		//System.out.println(second);
		if(nowtime.compareTo(time1)<0){
			System.out.println("课程未开始");
		}else if(nowtime.compareTo(time1)==0){
			System.out.println("课程正在进行");
		}else{
			System.out.println("课程以结束");
		}
 }

	public static void main(String[] args) throws ParseException {


        }

}
