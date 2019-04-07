FIG = docker-compose
RRUN = $(FIG) run --rm rails
NRUN = $(FIG) run --rm nuxt
RAILS = $(RRUN) bin/rails

# コンテナ操作コマンド等
build:
	@$(FIG) build
up:
	@$(FIG) up -d
down:
	@$(FIG) down
restart:
	@$(FIG) stop
	@$(FIG) start
clean:
	@docker image prune
	@docker volume prune
ps:
	@docker ps -a
nstart:
	@docker-compose start nuxt

# Shellに入るやつ
rsh:
	@$(FIG) exec rails bash
nsh:
	@$(FIG) exec nuxt ash

# ログ確認
rlog:
	@$(FIG) logs rails
rlogf:
	@$(FIG) logs -f rails
nlog:
	@$(FIG) logs nuxt
nlogf:
	@$(FIG) logs -f nuxt

# docker attach to rails container
# WARN: Attachしている状態でC-cするとPumaが落ちます
#       pryから抜ける場合はexitを使用してください
rat:
	@docker attach rails
nat:
	@docker attach nuxt

# railsコマンド
rc:
	@$(RAILS) console
rr:
	@$(RAILS) routes
rt:
	@$(RAILS) spec

# rails dbコマンド
dbc:
	@$(RAILS) db:create
dbm:
	@$(RAILS) db:migrate
dbs:
	@$(RAILS) db:seed
dbd:
	@$(RAILS) db:drop
dbinit:
	@$(RAILS) db:create
	@$(RAILS) db:migrate
	@$(RAILS) db:seed
dbreset:
	@$(RAILS) db:migrate:reset
	@$(RAILS) db:seed
dbprod:
	@rails db:migrate RAILS_ENV=production

# Bundler
bi:
	@$(RRUN) bundle install

# Yarn
yarn:
	@$(NRUN) yarn
npm:
	@docker-compose run --rm conv_nuxt npm install

# Permission変更(*DANGER*)
chown:
	@chown -R $(SUDO_USER):$(SUDO_USER) .

# selenium vnc
# pass: secret
vnc:
	open vnc://localhost:5900

save:
	git add .
	git commit -m "save"
	git push origin master

