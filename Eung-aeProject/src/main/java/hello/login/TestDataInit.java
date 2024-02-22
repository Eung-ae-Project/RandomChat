package hello.login;

import hello.login.domain.user.User;
import hello.login.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
@RequiredArgsConstructor
public class TestDataInit {
    private final UserRepository userRepository;

    /**
     * 테스트용 데이터 추가
     */
    @PostConstruct
    public void init() {
        User user = new User();
        user.setEmail("admin");
        user.setPassword("password");
        user.setNickname("관리자");
        userRepository.save(user);
    }
}