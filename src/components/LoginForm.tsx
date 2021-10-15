import React, {useState, FC} from 'react';
import {Form, Input, Button} from 'antd'
import rules from '../utils/rules'
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";



const LoginForm: FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    const submit = () => {
        console.log('submit')
     login(username, password)
    }
    return (
        <Form
        onFinish={submit}
        >

            <Form.Item
                label="Username"
                name="username"
                rules={[ rules.required('Please input your username!') ]}
            >
                <Input  value={username} onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="password"
                name="password"
                rules={[ rules.required('Please input your password!') ]}
            >
                <Input   value={password}
                         onChange={e => setPassword(e.target.value)}
                         type='password'
                />
            </Form.Item>
            {
                error && <div style={{color: 'red'}}>{error}</div>
            }
            <Form.Item>

                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;