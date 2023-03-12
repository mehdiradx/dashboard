import { Navigate, useOutlet } from 'react-router-dom';
import { Row, Col, Image } from 'components/UiKit';
import ContainerImage from 'assets/images/background.png';
import { useAuth } from 'hooks/useAuth';

function HomeLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/users" replace />;
  }

  return (
    <Row className="h-100">
      <Col xs={0} lg={12} className="h-inherit">
        <Image preview={false} src={ContainerImage} alt="auth" width="130%" height="100vh" />
      </Col>
      <Col xs={24} lg={12} className="h-inherit">
        <Row className="h-inherit" justify="center" align="middle">
          <Col xs={20} sm={16} lg={12}>
            {outlet}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default HomeLayout;
