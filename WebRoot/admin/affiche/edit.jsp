<%@ page language="java" import="java.util.*"  contentType="text/html;charset=gb2312"%>
<jsp:useBean id="sn" scope="page" class="com.bean.SystemBean" />
<jsp:useBean id="ab" scope="page" class="com.bean.AfficheBean" />
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String dir=sn.getDir();
%>
<HTML><HEAD><TITLE>��̨������</TITLE>
<LINK href="<%=basePath %><%=dir %>/images/Admin_Style.css" type=text/css rel=stylesheet>
<LINK href="<%=basePath %><%=dir %>/images/style.css" type=text/css rel=stylesheet>
<STYLE type=text/css>
BODY {
	MARGIN-LEFT: 0px; BACKGROUND-COLOR: #ffffff
}
.STYLE1 {color: #ECE9D8}
</STYLE>
</HEAD>
<script type="text/javascript">
function sub()
{
	if(document.form1.title.value.replace(/\s+$|^\s+/g,"").length<=0)
	{
		alert("���������ű��⣡");
		document.form1.title.focus();
		return false;
	}
	if(document.form1.content.value.replace(/\s+$|^\s+/g,"").length<=0||document.form1.content.value.replace(/\s+$|^\s+/g,"").length>1000)
   	{
   		alert("�����빫�����ݣ�������1000���ַ����ڣ�");
       	document.form1.content.focus();
      	return false;  
   	}
	form1.submit();
}
</script>
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
		String method=request.getParameter("method");
		String id=request.getParameter("id");
		String ifhide = "";	
		String title="";
		String content="";
		if(id!=null){
			System.out.println(id+"id��Ϊ��");
			List afficheList = ab.getOneAffiche(Integer.parseInt(id));
			title=afficheList.get(1).toString();
			content=afficheList.get(2).toString();
			ifhide=afficheList.get(5).toString();
		}		
		String str1="";String str2="";
		if(ifhide.trim().equals("0")){
			str2="checked";
		}else{
			str1="checked";
		}
%>
<BODY oncontextmenu="return false;" onselectstart="return false;" leftMargin=0 
background=<%=basePath %><%=dir %>/images/MainBg.gif topMargin=0 scroll=yes 
marginheight="0" marginwidth="0">
<TABLE height="100%" cellSpacing=0 cellPadding=0 width="100%" border=0>
  <TBODY>
  <TR>
    <TD align="left" vAlign=top ><form name="form1" action="<%=basePath %>Affiche.shtml" method="post"  >
<table width='100%' cellspacing='1' cellpadding='3' bgcolor='#CCCCCC' class="tablewidth">
<tr class="head"> 
      <td colspan="2">     
<%
	if(method.trim().equals("addAffiche")){
%>
        �������� 
<%}else{%>
	   �޸Ĺ���
<%} %>
      </td>
    </tr>
	
  <tr bgcolor='#FFFFFF'> <input type="hidden" name="method" value="<%=method %>"> <input type="hidden" name="id" value="<%=id %>">
    <td width='30%'><div align="right">��&nbsp;&nbsp;&nbsp;&nbsp;�⣺</div></td>
    <td ><input name="title" type="text" id="title" size="60" maxlength="100" value="<%=title %>"></td>
  </tr>
  <tr bgcolor='#FFFFFF'> 
      <td width='30%'> 
        <div align="right">�Ƿ���ʾ�� </div>
      </td>
      <td bgcolor='#FFFFFF' > 
        <input type="radio" name="ifhide" value="1" <%=str1 %>>
        ��ʾ 
        <input type="radio" name="ifhide" value="0" <%=str2 %>>
        ����ʾ </td>
    </tr>
    <tr bgcolor='#FFFFFF'> 
      <td width='30%'> 
        <div align="right">�������ݣ� </div>
      </td>
      <td bgcolor='#FFFFFF' > 
        <textarea name="content" cols="50" rows="8" ><%=content %></textarea> </td>
    </tr>
  <tr bgcolor='#FFFFFF'> 
      <td colspan="2" align="center"> 
        <input class=mmcinb type='button' name='button' value='�ύ����' onclick='sub()'>
      </td>
    </tr>
	
</table></form>
   </TD>
	</TR>
  </TBODY>
</TABLE>
</BODY>
<%} %>
</HTML>
