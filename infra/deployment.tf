resource "aws_codedeploy_app" "frontend" {
  name             = "frontend"
  compute_platform = "Server"

  tags = {
    Name = "frontend"
  }
}

resource "aws_codedeploy_deployment_group" "frontend" {
  app_name               = aws_codedeploy_app.frontend.name
  deployment_group_name  = "frontend"
  deployment_config_name = "CodeDeployDefault.AllAtOnce"
  service_role_arn       = aws_iam_role.prod_codedeploy.arn
  autoscaling_groups     = [aws_autoscaling_group.frontend.id]

  tags = {
    Name = "frontend"
  }

  deployment_style {
    deployment_option = "WITH_TRAFFIC_CONTROL"
    deployment_type   = "IN_PLACE"
  }

  load_balancer_info {
    target_group_info {
      name = aws_lb_target_group.frontend.name
    }
  }
}