```
logit <- glm(Cible~1, data=train, family=binomial(link = "logit"))
```

## Information sur la regression

```
selection
summary(selection)
```

$formule formule du modèle.
## Algorimthe de selection automatique des variables

```
selection<- step(logit, direction="forward/backward/both")
```

## Représentation de la régression

```
library(ggplot2)

fit_glm <- glm(formule, train2, family=binomial(link="logit"))

glm_link_scores <- predict(fit_glm, train2, type="link")
glm_response_scores <- predict(fit_glm, train2, type="response")

score_data <- data.frame(link=glm_link_scores, 
                         response=glm_response_scores,
                         bad_widget=train2$FlagASV,
                         stringsAsFactors=FALSE)

score_data %>% 
  ggplot(aes(x=link, y=response, col=as.factor(bad_widget))) +
  geom_point() + 
  geom_rug() + 
  ggtitle("Both link and response scores put cases in the same order") +
  xlim(-10, 10) + 
  theme_minimal()
  ```


