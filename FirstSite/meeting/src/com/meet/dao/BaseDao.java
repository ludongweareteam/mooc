package com.meet.dao;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class BaseDao { 
	 static Connection conn=null;
	 static PreparedStatement pstm=null;
	 static ResultSet rs=null;
	private final static String URL="jdbc:mysql://localhost:3306/meet?useUnicode=true&characterEncoding=utf-8";
	private final static String DRIVER="com.mysql.jdbc.Driver";
	private final static String USER="root";
	private final static String PWD="ptl123";
	static {
		try {
			Class.forName(DRIVER);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	 
	
	public static void main(String args[]) {
		BaseDao basedao=new BaseDao();
		basedao.getConnection();
		  
	}

	/**
	 * JDBC技术
	 * 1、建立连接
	 * a、需要驱动程序
	 * b、连接字符串
	 * c、用户名和密码
	 * @return
	 */
	
	public Connection getConnection() {
		 try {
		      Class.forName(DRIVER);     //加载MYSQL JDBC驱动程序   
		      //Class.forName("org.gjt.mm.mysql.Driver");
		     System.out.println("Success loading Mysql Driver!");
		    }
		    catch (Exception e) {
		      System.out.print("Error loading Mysql Driver!");
		      e.printStackTrace();
		    }
		    try {
		      Connection connect = DriverManager.getConnection(
		    		  URL,USER,PWD);
		           //连接URL为   jdbc:mysql//服务器地址/数据库名  ，后面的2个参数分别是登陆用户名和密码

		      System.out.println("Success connect Mysql server!");
		    //Statement stmt = connect.createStatement();
		     // ResultSet rs = stmt.executeQuery("select * from Course");
		                                                              //user 为你表的名称
		//while (rs.next()) {
		       // System.out.println(rs.getString("courseName"));
		    //  }
		    }
		    catch (Exception e) {
		      System.out.print("get data error!");
		      e.printStackTrace();

		    }
		return conn;
	}
	
	
	/**
	 * 执行增删改
	 * @param sql
	 * @param paramValue
	 * @return
	 */
	/*
	 * 第二步：executeUpdate 执行增、删、改
	 * */
	public int executeUpdate(String sql,Object paramValue){
		Object[] paramValues=null;
		if(paramValue!=null){
			paramValues=new Object[1];
			paramValues[0]=paramValue;
		}
		return executeUpdate(sql,paramValues);
	}
	
	public int executeUpdate(String sql,Object[] paramValues){
		conn=this.getConnection();
		int ret=0;
		try {
			pstm=conn.prepareStatement(sql);
			if(paramValues!=null){
				for(int i=0;i<paramValues.length;i++){
					pstm.setObject(i+1, paramValues[i]);
				}
			}
			ret=pstm.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			ret=-1;
		}finally{
			closeStatement();
		}
		return ret;
	}
	
	public int executeUpdate(String sql){
		return this.executeUpdate(sql, null);	 
	}
	
	
	
	public ResultSet executeQuery(String sql){
		
		return executeQuery(sql,null);
	}
	
	/**
	 * 执行查询，返回查询结果
	 */
	public ResultSet executeQuery(String sql,Object[] paramValues){
		conn=this.getConnection();
		try {
			pstm=conn.prepareStatement(sql);
			if(paramValues!=null){
				for(int i=0;i<paramValues.length;i++){
					pstm.setObject(i+1,paramValues[i]);
				}
			}
			rs=pstm.executeQuery();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		return rs;
	}
	public void closeStatement(){
		try {
			if(pstm!=null)pstm.close();
			if(conn!=null)conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public void closeAll(){
		
		try {
			if(rs!=null)rs.close();
			if(pstm!=null)pstm.close();
			if(conn!=null)conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	 
}
