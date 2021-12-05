// 참고 : https://explain-programming.tistory.com/5

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormField, Input } from 'semantic-ui-react';
import "./DiaryWritePage.scss";

const DiaryWritePage = () => {
    let location = useLocation(); // useLocation 훅은 현재의 URL을 대표하는 location 객체를 반환
    const params = new URLSearchParams(location.search);
    const whatDay = params.get('selectedDate');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(whatDay) // 초기 상태 : 현재 날짜와 시간으로 설정

    const handleDateChange = (e) => {
        const d = new Date(e.target.value);
        const year = d.getFullYear().toString();
        const month = (d.getMonth() + 1);
        const day = d.getDate();
        setDate(`${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`);
        console.log(date);
    };

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const SubmitDiary = () => {
        const diaryData = { title: title, content: content, date: date };
        console.log("diary-data-date: ", date)
        axios.post('/diary', diaryData).then((res) => {
            console.log(res)
        })
        console.log(date)
        navigate(`/diary?writtenDate=${date}`);
    }

    var navigate = useNavigate();

    return (
        <div className="Diary">
            <Form onSubmit={SubmitDiary}>
                <FormField>
                    {/* 제목 : <Input */}
                    제목
                    <textarea
                        className="DiaryTitle"
                        type="text"
                        name="DiaryTitle"
                        value={title}
                        placeholder="제목을 입력하세요"
                        onChange={
                            (e) => {
                                setTitle(e.target.value)
                            }
                        }
                        style={{ width: "400px", height: "30px", resize: "none" }}
                    />
                </FormField>
                <FormField>
                    날짜 <Input
                        id='date'
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                        style={{ width: "150px", resize: "none" }}
                    />
                </FormField>
                <FormField>
                    내용
                    <textarea
                        className="DiaryContent"
                        value={content}
                        placeholder="내용을 입력하세요"
                        onChange={handleChange}
                        style={{ width: "430px", height: "200px", resize: "none" }}
                    />
                </FormField>
                <FormField>
                    <Button type="submit" className="DiaryWriteButton">저장</Button>
                </FormField>
            </Form>
        </div>
    );
}

export default DiaryWritePage;