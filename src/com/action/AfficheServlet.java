package com.action;

/**
 * 网站公告
 * @author Administrator
 *
 */

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bean.AfficheBean;
import com.bean.SystemBean;
import com.util.Constant;
import com.util.Filter;

public class AfficheServlet extends HttpServlet {

	/**
	 * 对象的构造函数。
	 */
	public AfficheServlet() {
		super();
	}

	/**
	 * 破坏servlet。 <br>
	 */
	@Override
	public void destroy() {
		super.destroy(); // 只需在日志中输入“destroy”字符串即可
		// 把你的代码放在这里
	}

	/**
	 * servlet的doGet方法。 <br>
	 *
	 * 当表单的标记值方法等于get时，将调用此方法。
	 * 
	 * @param 请求客户端发送给服务器的请求
	 * @param 响应服务器发送给客户端的响应
	 * @throws 发生错误时发生ServletException
	 * @throws IOException如果发生错误
	 */
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doPost(request, response);
	}

	/**
	 * servlet的doPost方法。 <br>
	 *
	 * 当表单的标记值方法等于post时，将调用此方法。
	 * 
	 * @param 请求客户端发送给服务器的请求
	 * @param 响应服务器发送给客户端的响应
	 * @throws 发生错误时发生ServletException
	 * @throws IOException如果发生错误
	 */
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType(Constant.CONTENTTYPE);
		request.setCharacterEncoding(Constant.CHARACTERENCODING);
		String sysdir = new SystemBean().getDir();
		HttpSession session = request.getSession();
		try {
			String username2 = (String) session.getAttribute("user");
			if (username2 == null) {
				request.getRequestDispatcher("error.jsp").forward(request, response);
			} else {
				AfficheBean afficheBean = new AfficheBean();
				String method = request.getParameter("method").trim();
				if (method.equals("addAffiche")) {// 增加公告
					String title = Filter.escapeHTMLTags(request.getParameter("title").trim());
					String content = Filter.escapeHTMLTags(request.getParameter("content").trim());
					String adder = username2;
					String ifhide = Filter.escapeHTMLTags(request.getParameter("ifhide").trim());
					int flag = afficheBean.addAffiche(title, content, adder, ifhide);
					if (flag == Constant.SUCCESS) {
						request.setAttribute("message", "操作成功！");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						request.setAttribute("message", "系统维护中请稍后再试！");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					}
				} else if (method.equals("editAffiche")) {// 修改公告
					String id = Filter.escapeHTMLTags(request.getParameter("id").trim());
					String title = Filter.escapeHTMLTags(request.getParameter("title").trim());
					String content = Filter.escapeHTMLTags(request.getParameter("content").trim());
					String adder = username2;
					String ifhide = Filter.escapeHTMLTags(request.getParameter("ifhide").trim());
					int flag = afficheBean.updateAffiche(Integer.parseInt(id), title, content, adder, ifhide);
					if (flag == Constant.SUCCESS) {
						request.setAttribute("message", "操作成功！");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						request.setAttribute("message", "系统维护中请稍后再试！");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					}
				} else if (method.equals("hideAffiche")) {
					String id = Filter.escapeHTMLTags(request.getParameter("id").trim());
					int flag = afficheBean.hideAffiche(Integer.parseInt(id));
					if (flag == Constant.SUCCESS) {
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						request.setAttribute("message", "系统维护中，请稍后再试！");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					}
				} else if (method.equals("delaffiche")) {// 删除公告
					String check[] = request.getParameterValues("checkit");
					if (check == null) {
						request.setAttribute("message", "请选择要删除的记录！");
						request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
					} else {
						int id[] = new int[check.length];
						for (int i = 0; i < check.length; i++) {
							int s = Integer.parseInt(check[i]);
							id[i] = s;
						}
						int flag = afficheBean.delAffiche(id);
						if (flag == Constant.SUCCESS) {
							request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
						} else {
							request.setAttribute("message", "系统维护中，请稍后再试！");
							request.getRequestDispatcher(sysdir + "/affiche/index.jsp").forward(request, response);
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			request.getRequestDispatcher("error.jsp").forward(request, response);
		}
	}

	/**
	 * 初始化servlet。 <br>
	 *
	 * @throws 发生错误时发生ServletException
	 */
	@Override
	public void init() throws ServletException {
		// 把你的代码放在这里
	}

}
