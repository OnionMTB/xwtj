<%@ page language="java" import="java.util.*"  contentType="text/html;charset=gb2312"%>
<%@ page import="com.bean.*" %>
<jsp:useBean id="lb" scope="page" class="com.bean.AdminBean" />
<jsp:useBean id="sn" scope="page" class="com.bean.SystemBean" />
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String dir=sn.getDir();
%>
<HTML><HEAD><TITLE>��̨������</TITLE>
<LINK href="<%=basePath %><%=dir %>/images/Admin_Style.css" type=text/css rel=stylesheet>
<LINK href="<%=basePath %><%=dir %>/images/style.css" type=text/css rel=stylesheet>
<SCRIPT language=JavaScript src="<%=basePath %><%=dir %>/images/Common.js"></SCRIPT>
<STYLE type=text/css>
BODY {
	MARGIN-LEFT: 0px; BACKGROUND-COLOR: #ffffff
}
.STYLE1 {color: #ECE9D8}
</STYLE>
</HEAD>
<%
String message = (String)request.getAttribute("message");
	if(message == null){
		message = "";
	}
	if (!message.trim().equals("")){
		out.println("<script language='javascript'>");
		out.println("alert('"+message+"');");
		out.println("</script>");
	}
	request.removeAttribute("message");
%>
<%
	String username=(String)session.getAttribute("user");
	if(username==null){
		response.sendRedirect(path+"/error.jsp");
	}
	else{
		List list=(List)session.getAttribute("list");
		List list2=lb.getAllManager();
		
%>
<BODY oncontextmenu="return false;" onselectstart="return false;" leftMargin=0 background=<%=basePath %><%=dir %>/images/MainBg.gif topMargin=0 scroll=no marginheight="0" marginwidth="0">
<TABLE height="100%" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
    <TD align="left" vAlign=top >
	<form action="<%=basePath %>/AdminServlet?method=manager" method="post" name="form1" onSubmit="return checkUser()">
       <TABLE width="100%" border=0 align="center" cellPadding=3 cellSpacing=1 class=tablewidth>
		  <TBODY>
		  <TR align="center" class=head>
			<TD height=23>���</TD>
			<TD>ϵͳ�˺���</TD>
			<TD>����ʱ��</TD>
			<TD>״̬</TD>
			<TD>��¼����</TD>
			<TD>ɾ��</TD>
		  </TR>
		<%
		if(list2.size()!=0){
			for(int i = 0; i<list2.size(); i++){
				List list3 = (List)list2.get(i);
		%>
		  <TR onClick=OnclikeTable(this) align="center" bgColor=#ffffff>
			<TD width="30" id=map><%=i+1 %></TD>
			<TD id=map><%=list3.get(1).toString() %></TD>
			<TD id=map><%=list3.get(2).toString() %></TD>
			<TD id=map><%=Integer.parseInt(list3.get(4).toString())==1?"����":"����" %></TD>
			<TD id=map><%=list3.get(5).toString() %></TD>
			<TD id=map><%if(Integer.parseInt(list3.get(0).toString())==1){out.print("ɾ��");}else{%><a href="<%=basePath %>AdminServlet?method=delm&id=<%=list3.get(0).toString()%>">ɾ��</a><%} %></TD>
		  </TR>
		<%}}else{%>	
		  <TR align="center" bgColor=#ffffff>
			<TD colspan=8 align=center id=map>��ǰ��û�����ϵͳ�˺�</TD>
		  </TR>
		<%} %>  
		  </TBODY>
	   </TABLE><br>
	   <TABLE width="40%" border=0 align="center" cellPadding=3 cellSpacing=1>
	   <TR><TD>
	   <TABLE width="100%" border=0 align="center" cellPadding=3 cellSpacing=1 class=tablewidth>
		  <TBODY>
		  <TR align="center" class=head>
			<TD height=23 colspan="2">����/�޸�ϵͳ�˺�</TD>
		  </TR>
		  <TR  align="center" bgColor=#ffffff>
			<TD width="40%" align="right" id=map>ϵͳ�˺�����</TD><input type=hidden name=ra value="">
			<TD width="60%" align="left" id=map><input type="text" name="username" value="<%=request.getAttribute("username")==null?"":request.getAttribute("username")%>" maxlength="10" size="18" class=input  onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')"/>&nbsp;��ĸ������6-10λ</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD align="right" id=map>��¼���룺</TD>
			<TD align="left" id=map><input type="text" name="password" maxlength="16" size="18" class=input  onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" 
                              onkeyup="value=value.replace(/[\W]/g,'')"/>&nbsp;��ĸ������6-16λ</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD align="right" id=map>��ǰ״̬��</TD>
			<TD align="left" id=map><select name="isuse">
									<option value="">--��ѡ��--</option>
									<option value="����">����</option>
									<option value="����">����</option>
									</select></TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD align="right" id=map>�������ͣ�</TD>
			<TD align="left" id=map><input type="radio" name="add" value="add" checked>����&nbsp;<input type="radio" name="update" value="update"  disabled=true>�޸�</TD>
		  </TR>
		  <TR align="center" bgColor=#ffffff>
			<TD colspan="2" align="center" id=map><input type="submit" value="ȷ��">&nbsp;&nbsp;<input type="reset" value="����"></TD>
			</TR>
		  </TBODY>
	   </TABLE>
	   </TD></TR></table><br>
	   <TABLE align="center" width="80%" border="0">
	    <TR align="center" valign="top">
		<TD align="left"><div align="left">ע�⣺1��������ϵͳ�˺ţ���ֱ������ϵͳ�˺����͵�¼���룬��ѡ��������ʹ��״̬��ѡ�С����ӡ���ť��ȷ�����ɡ�<br>
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2�����޸�ϵͳ�˺���Ϣ�����������ϵͳ�˺�����ҳ���в��ı�����Զ���ʾ��ϵͳ�˺���Ϣ���޸ĺ�ע�Ᵽ�֡��޸ġ���ťΪѡ��״̬��ȷ�����ɡ�<br>
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3���粻�޸ĵ�¼���룬�뱣�������Ϊ�ա�<br>	
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4������ɾ��ĳϵͳ�˺ţ�ֱ�������������ġ�ɾ�������ּ��ɡ�	<br>
		  </div></TD>
       </TR>
	   </TABLE>
	  </form>
    </TD>
  </TR>
  </TBODY>
</TABLE>
</BODY>
<%} %>
</HTML>
