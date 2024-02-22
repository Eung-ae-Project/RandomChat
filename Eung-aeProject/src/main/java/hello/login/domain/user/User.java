package hello.login.domain.user;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class User {

    private Long id;

    @NotEmpty
    private String email;
    @NotEmpty
    private String nickname;
    @NotEmpty
    private String password;
}
