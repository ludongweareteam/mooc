package com.meet.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.meet.entity.Course;

public class Mycourse extends BaseDao {
	public int delete(int id)
	{
		int ret=0;
		String sql="delete from course where courseId=?";//问号是占位符。
		ret=super.executeUpdate(sql, id);
		return ret;
	}
	
	public int Insert(String courseName,String logo){//还没改的
		int ret = 0;
		String insertSql = "insert into company(comName,comType) values('"+courseName+"','"+logo+"')";
		ret = super.executeUpdate(insertSql);
		return ret;
	}
	
	public int Update(String studyPercent,int id){
		int ret=0;
		String updateSql=
				"update course"+" set studyPercent='"+studyPercent+"' where comId="+id;
		
		ret=super.executeUpdate(updateSql);
		return ret;
	}
	
	public  List<Course> search()
	{
		List<Course> courselist=new ArrayList<Course>();//把实体集放入list，把从数据库拿到的数据装箱
	   String sql="select courseId,courseName,logo,studyPercent from course order by courseId";	
	   ResultSet str=super.executeQuery(sql);
	   Course course=null;
	   //super.executeUpdate(sql);
	   try {
		while(str.next()){
			   int courseId= str.getInt("courseId");
		       String courseName=str.getString("courseName");
			   //String comType=str.getString("comType"); 
			   String logo=str.getString("logo"); 
			   String studyPercent=str.getString("studyPercent");
			   course=new Course();
			   course.setCourseId(courseId);
			   course.setCourseName(courseName);
			   course.setLogo(logo);
			   course.setStudyPercent(studyPercent);
			   
			   courselist.add(course);
		   
		   }
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally
	{
		super.closeAll();
	}
	   return courselist;
	}
	
	public static void main(String args[])
	{
	Mycourse mycourse=new Mycourse();
	mycourse.search();
	System.out.println(mycourse.search());
	}
	
}
